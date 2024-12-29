import { User } from "@/common/types/data";
import { z } from "zod";

type SigninForm = {
    id?: number;
    name?: string;
    username: string;
    password: string;
    imageUrl?: string;
};

type ZodErrors = {
    username?: string[];
    password?: string[];
};

type SigninState = SigninForm & {
    zodErrors?: ZodErrors;
};

const SigninFormSchema = z.object({
    username: z.string().refine((value) => value === "user", {
        message: "ユーザー名は user と入力してください",
    }),
    password: z.string().refine((value) => value === "password", {
        message: "パスワードは password と入力してください",
    }),
});

export async function postSigninForm(prevState: SigninState, formData: FormData): Promise<SigninState> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const validatedFormData = SigninFormSchema.safeParse({
        username: username,
        password: password,
    });

    if (!validatedFormData.success) {
        return {
            username: username,
            password: password,
            zodErrors: validatedFormData.error.flatten().fieldErrors,
        };
    }

    const res = await fetch(`${process.env.API_BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: validatedFormData.data.username,
            password: validatedFormData.data.password,
        }),
    });

    if (!res.ok) {
        console.log("error");
        console.log(res);
        return {
            username: username,
            password: password,
            zodErrors: {
                username: username !== "user" ? ["ユーザー名が違います"] : undefined,
                password: password !== "password" ? ["パスワードが違います"] : undefined,
            },
        };
    }

    const resJson = (await res.json()) as User;

    return {
        id: resJson.id,
        name: resJson.displayName,
        username: "user",
        password: "password",
        imageUrl: resJson.profileImageUrl,
    };
}
