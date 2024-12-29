import { redirect } from "next/navigation";

import { z } from "zod";

type SellForm = {
    productId?: number;
    imageUrl: string;
    title: string;
    description: string;
    category: "shoes" | "clothes" | "book" | null;
    price: number;
    condition: "new" | "used" | null;
};

type ZodErrors = {
    imageUrl?: string[];
    title?: string[];
    description?: string[];
    category?: string[];
    price?: string[];
    condition?: string[];
};

type SellState = SellForm & {
    zodErrors?: ZodErrors;
};

const SellFormSchema = z.object({
    imageUrl: z.string().url(),
    title: z.string(),
    description: z.string(),
    category: z.enum(["shoes", "clothes", "book"]),
    price: z.number().min(0),
    condition: z.enum(["new", "used"]),
});

export async function postSellForm(prevState: SellState, formData: FormData): Promise<SellState> {
    const imageUrl = formData.get("imageUrl") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as "shoes" | "clothes" | "book";
    const price = formData.get("price") as string;
    const condition = formData.get("condition") as "new" | "used";

    const validatedFormData = SellFormSchema.safeParse({
        imageUrl: imageUrl,
        title: title,
        description: description,
        category: category,
        price: Number(price),
        condition: condition,
    });

    if (!validatedFormData.success) {
        return {
            imageUrl: imageUrl,
            title: title,
            description: description,
            category: category,
            price: Number(price),
            condition: condition,
            zodErrors: validatedFormData.error.flatten().fieldErrors,
        };
    }

    const res = await fetch(`${process.env.API_BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData.data),
        credentials: "include",
    });

    if (!res.ok) {
        console.log("error");
        return {
            imageUrl: imageUrl,
            title: title,
            description: description,
            category: category,
            price: Number(price),
            condition: condition,
            zodErrors: {
                imageUrl: ["画像のアップロードに失敗しました"],
                title: [],
                description: [],
                category: [],
                price: [],
                condition: [],
            },
        };
    }

    const resJson = await res.json();
    redirect(`/users/${resJson.id}`);
}
