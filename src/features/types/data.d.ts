// ユーザー
export type User = {
    id: number;
    username: string;
    displayName: string;
    email: string;
    profileImageUrl: string;
    description: string;
};

// 商品
export type Product = {
    id: number;
    title: string;
    description: string;
    category: "shoes" | "clothes" | "book";
    imageUrl: string;
    price: number;
    condition: string;
    owner: ProductsOwner;
};

// 商品オーナー
type ProductsOwner = {
    id: number;
    username: string;
    displayName: string;
    email: string;
    profileImageUrl: string;
    discription: string;
};
