import { cookies } from "next/headers";
import { NextRequest } from "next/server";

/**
 * POST function for setting a cookie.
 *
 * @param req - The incoming request object.
 * @returns {Promise<void>} An empty promise.
 */
export async function POST(req: NextRequest) {
    const cookieStore = await cookies();
    cookieStore.set("token", "dummy_token", { secure: true });
    console.log(req);
}
