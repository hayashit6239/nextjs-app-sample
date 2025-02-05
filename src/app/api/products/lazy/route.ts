import { Product } from "@/common/types/data";
import { NextResponse } from "next/server";

/**
 * GET /api/products
 * @description 商品一覧取得API
 * @returns {Promise<NextResponse>} - NextResponseオブジェクト
 */
export async function GET() {
    const res = await fetch(`${process.env.API_BASE_URL}/products/lazy`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        next: {
            revalidate: 60,
        },
    });

    if (!res.ok) {
        console.log("error");
        console.log(res);
    }

    const resJson = (await res.json()) as Product[];

    return NextResponse.json<Product[]>(resJson);
}
