import { Product } from "@/common/types/data";
import { HomeProductCardListPresentation } from "./presentation";

export async function HomeProductCardListContainer() {
    try {
        const res = await fetch(`http://localhost:8000/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 60,
            },
        });

        const products = (await res.json()) as Product[];

        return <HomeProductCardListPresentation products={products} />;
    } catch {
        console.log("error");
    }
}
