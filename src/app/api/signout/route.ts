import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/signout
 * @description ログアウトAPI
 * @param {NextRequest} req - NextRequestオブジェクト
 * @returns {Promise<NextResponse>} - NextResponseオブジェクト
 */
export async function POST(req: NextRequest) {
    const data = await req.json();
    const userId = data.id;

    const res = await fetch(`${process.env.API_BASE_URL}/auth/signout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: userId,
        }),
    });

    if (!res.ok) {
        console.log("error");
        console.log(res);
    }

    const resJson = await res.json();

    return NextResponse.json(resJson);
}
