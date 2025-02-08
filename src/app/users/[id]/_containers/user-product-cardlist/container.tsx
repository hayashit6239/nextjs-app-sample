import { Product } from "@/common/types/data";
import { UserProductCardListPresentation } from "./presentation";

/**
 * UserProductCardListContainer is a container component that fetches and filters products based on the provided user ID.
 *
 * @param id - The ID of the user.
 * @returns {Promise<JSX.Element>} The presentation component UserProductCardListPresentation with the filtered products.
 * @throws Error if the fetch request fails or returns an error response.
 */
export async function UserProductCardListContainer({ id }: { id: number }) {
    const res = await fetch(`http://localhost:3000/api/products/quick`);

    if (!res.ok) {
        const error = await res.json();
        console.log(error);
        throw new Error(error.error || `Failed to fetch product (status: ${res.status})`);
    }

    const products = (await res.json()) as Product[];
    const filteredProducts = products.filter((x) => x.owner.id === id);
    return <UserProductCardListPresentation products={filteredProducts} />;
}
