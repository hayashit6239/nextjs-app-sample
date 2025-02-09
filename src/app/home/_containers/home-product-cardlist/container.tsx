import { Product } from "@/common/types/data";
import { HomeProductCardListPresentation } from "./presentation";

/**
 * Fetches product data and renders the HomeProductCardListPresentation component.
 *
 * @returns {Promise<JSX.Element>} The HomeProductCardListPresentation component with the fetched product data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function HomeProductCardListContainer() {
    const res = await fetch(`http://localhost:3000/api/products/quick`);

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `Failed to fetch product (status: ${res.status})`);
    }

    const products = (await res.json()) as Product[];
    return <HomeProductCardListPresentation products={products} />;
}
