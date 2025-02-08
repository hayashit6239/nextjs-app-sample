import { NextRequest, NextResponse } from "next/server";

/**
 * POST function for signing out a user.
 *
 * @param req - The incoming request object.
 * @returns {Promise<NextResponse>} The response from the API.
 * @throws {Error} If an error occurs during the API request.
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
