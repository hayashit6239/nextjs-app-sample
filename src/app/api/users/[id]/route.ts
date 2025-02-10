import { User } from "@/common/types/data";
import { NextResponse } from "next/server";

/**
 * GET function for fetching a user by ID.
 *
 * @param request - The incoming request object.
 * @param params - The parameters object containing the user ID.
 * @returns {Promise<NextResponse>} The response from the API.
 * @throws {Error} If an error occurs during the API request.
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        const res = await fetch(`${process.env.API_BASE_URL}/users/lazy/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 0,
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
