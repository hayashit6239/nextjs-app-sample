import { User } from "@/common/types/data";
import { NextResponse } from "next/server";

/**
 * GET function for fetching quick users.
 *
 * @returns {Promise<NextResponse>} The response from the API.
 * @throws {Error} If an error occurs during the API request.
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        const res = await fetch(`${process.env.API_BASE_URL}/users/${id}`, {
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

            if (res.status === 404) {
                return NextResponse.json({ error: `User with ID ${id} not found` }, { status: 404 });
            }

            return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
        }

        const resJson = (await res.json()) as User;
        return NextResponse.json<User>(resJson);
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
