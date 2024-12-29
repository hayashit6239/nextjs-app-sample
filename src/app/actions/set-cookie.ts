"use server";

import { cookies } from "next/headers";

export async function setCookieAction(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set("token", "dummy_token", { secure: true });
}
