import { Product } from "@/common/types/data";
import { ProductDetailPresentation } from "./presentation";

/**
 * Fetches product data based on the provided productId and renders the ProductDetailPresentation component.
 *
 * @param {object} props - The component's props.
 * @param {string} props.productId - The ID of the product to fetch.
 * @returns {Promise<JSX.Element>} The ProductDetailPresentation component with the fetched product data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function ProductDetailContainer({ productId }: { productId: string }) {
    const id = productId;

    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `Failed to fetch product (status: ${res.status})`);
    }

    const product = (await res.json()) as Product;
    return <ProductDetailPresentation product={product} />;
}
