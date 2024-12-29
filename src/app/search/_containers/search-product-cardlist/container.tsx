import { Product } from "@/common/types/data";
import { SearchProductCardListPresentation } from "./presentation";

export async function SearchProductCardListContainer() {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/products/quick`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 60,
            },
        });

        const products = (await res.json()) as Product[];

        return <SearchProductCardListPresentation products={products} />;
    } catch {
        console.log("error");
    }
}
