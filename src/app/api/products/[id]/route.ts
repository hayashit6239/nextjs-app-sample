import { Product } from "@/features/types/data";
import { NextResponse } from "next/server";

/**
 * GET function for fetching a lazy product.
 *
 * @param request - The incoming request object.
 * @param params - The parameters for the request.
 * @returns {Promise<NextResponse>} The response from the API.
 * @throws {Error} If an error occurs during the API request.
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        const res = await fetch(`${process.env.API_BASE_URL}/products/lazy/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 60,
            },
        });

        if (!res.ok) {
            console.error("API request failed:", res.status, res.statusText);

            if (res.status === 404) {
                return NextResponse.json({ error: `Product with ID ${id} not found` }, { status: 404 });
            }

            return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
        }

        const resJson = (await res.json()) as Product;
        return NextResponse.json<Product>(resJson);
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
