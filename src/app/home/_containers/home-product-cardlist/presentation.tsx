import { Product } from "@/common/types/data";
import { Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { FC } from "react";

type Props = {
    products: Product[];
};

export const HomeProductCardListPresentationMemo: FC<Props> = (props) => {
    const { products } = props;

    return (
        <Flex direction="column" className="h-full gap-y-8">
            <ProductCategoryArea category="トップス" productCards={products.filter((x) => x.category === "clothes")} />
            <ProductCategoryArea category="本" productCards={products.filter((x) => x.category === "book")} />
            <ProductCategoryArea category="シューズ" productCards={products.filter((x) => x.category === "shoes")} />
        </Flex>
    );
};

type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

type ProductCategoryAreaProps = {
    category: string;
    productCards: ProductCardProps[];
};

const ProductCategoryArea: FC<ProductCategoryAreaProps> = (props) => {
    const { category, productCards } = props;

    return (
        <div className="space-y-3">
            <Text className="text-3xl font-bold">{category}</Text>
            <Flex wrap="wrap" className="h-full gap-x-2 gap-y-4">
                {productCards.map((x) => {
                    return <ProductCard key={x.id} id={x.id} title={x.title} price={x.price} imageUrl={x.imageUrl} />;
                })}
            </Flex>
        </div>
    );
};

const ProductCard: FC<ProductCardProps> = (props) => {
    const { id, title, price, imageUrl } = props;

    return (
        <div key={id} className="font-bold">
            <Link href={`/products/${id}`}>
                <Image src={imageUrl} alt="" radius="md" className="h-40 w-52 bg-white mb-2" />
            </Link>
            <Text className="truncate text-sm font-bold">{title}</Text>
            <Text className="text-sm font-bold">{price}</Text>
        </div>
    );
};

export const HomeProductCardListPresentation = React.memo(HomeProductCardListPresentationMemo);
