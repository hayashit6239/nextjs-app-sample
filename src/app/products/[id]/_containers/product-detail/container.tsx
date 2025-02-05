import { Product } from "@/common/types/data";
import { ProductDetailPresentation } from "./presentation";

/**
 * Fetches product data based on the provided productId and renders the ProductDetailPresentation component.
 *
 * @param {object} props - The component's props.
 * @param {number} props.productId - The ID of the product to fetch.
 * @returns {JSX.Element | undefined} The ProductDetailPresentation component with the fetched product data, or undefined if an error occurs.
 */
export async function ProductDetailContainer({ productId }: { productId: string }) {
    const id = productId;

    const res = await fetch(`http://localhost:3000/api/products/lazy/${id}`);

    if (!res.ok) {
        // エラーレスポンスを解析して、適切なエラーメッセージを返す
        const error = await res.json();
        console.log(error);
        throw new Error(error.error || `Failed to fetch product (status: ${res.status})`);
    }

    const product = (await res.json()) as Product;
    return <ProductDetailPresentation product={product} />;
}
