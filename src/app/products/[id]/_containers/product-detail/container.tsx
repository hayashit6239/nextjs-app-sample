import { Product } from "@/common/types/data";
import { ProductDetailPresentation } from "./presentation";

export async function ProductDetailContainer({ productId }: { productId: number }) {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/products/lazy/${productId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 60,
            },
        });

        const product = (await res.json()) as Product;
        console.log(product);
        return <ProductDetailPresentation product={product} />;
    } catch {
        console.log("error");
    }
}
