import { Product } from "@/common/types/data";
import { NextResponse } from "next/server";

/**
 * GET function for fetching lazy products.
 *
 * @returns {Promise<NextResponse>} The response from the API.
 * @throws {Error} If an error occurs during the API request.
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
