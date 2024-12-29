import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore = await cookies();
    cookieStore.set("token", "dummy_token", { secure: true });
    console.log(req);
}
