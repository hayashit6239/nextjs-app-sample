import { Product } from "@/common/types/data";
import { HomeProductCardListPresentation } from "./presentation";

export async function HomeProductCardListContainer() {
    try {
        console.log("start fetch");
        const res = await fetch(`${process.env.API_BASE_URL}/products/lazy`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 10,
            },
        });
        console.log("end fetch");
        const products = (await res.json()) as Product[];
        return <HomeProductCardListPresentation products={products} />;
    } catch {
        console.log("HomeProductCardListContainer で Error が発生しました。");
    }
}
