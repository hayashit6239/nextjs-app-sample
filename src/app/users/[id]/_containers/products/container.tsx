import { ProductsPresentation } from "./presentation";

type ProductsOwner = {
    id: number,
    username: string,
    displayName: string,
    email: string,
    profileImageUrl: string,
    discription: string
}

export type Product = {
    id: number,
    title: string,
    description: string,
    categpry: string,
    imageUrl: string,
    price: number,
    condition: string,
    owner: ProductsOwner
}

export async function ProductsContainer({ id }: { id: number }) {
    try {
        const res = await fetch(`http://localhost:8000/products`);
        const products = await res.json() as Product[];
        
        const filteredProducts = products.filter(x => x.owner.id === id);

        return <ProductsPresentation products={filteredProducts} />;
    }
    catch {
        console.log("error")
    }
}