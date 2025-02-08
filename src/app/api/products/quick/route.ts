import { Product } from "@/common/types/data";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/products/quick`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 30,
            },
        });

        if (!res.ok) {
            console.error("API request failed:", res.status, res.statusText);
            return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
        }

        const resJson = (await res.json()) as Product[];
        return NextResponse.json<Product[]>(resJson);
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
