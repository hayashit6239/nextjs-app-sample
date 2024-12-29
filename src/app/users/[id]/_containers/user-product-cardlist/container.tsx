import { Product } from "@/common/types/data";
import { UserProductCardListPresentation } from "./presentation";

export async function UserProductCardListContainer({ id }: { id: number }) {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/products/quick`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 0,
            },
        });

        const products = (await res.json()) as Product[];

        const filteredProducts = products.filter((x) => x.owner.id === id);

        return <UserProductCardListPresentation products={filteredProducts} />;
    } catch {
        console.log("error");
    }
}
