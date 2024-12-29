"use client"

import { Flex, Image, Text } from "@mantine/core";
import { FC } from "react";
import { Product } from "./container";

type Props = {
    products: Product[]
};


export const ProductsPresentation: FC<Props> = (props) => {
    const { products } = props;
 
    return (
        <Flex wrap="wrap" className="h-full gap-x-8 gap-y-4">
            {products.map(x => {
                return (
                    <ProductCard
                        key={x.id}
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        imageUrl={x.imageUrl}
                    />
                )
            })}
        </Flex>
    );
};

type ProductCard = {
    id: number,
    title: string,
    price: number,
    imageUrl: string
};

const ProductCard: FC<ProductCard> = (props) => {
    const { id, title, price, imageUrl } = props;

    return (
        <div key={id}>
            <Image
                src={imageUrl}
                alt=""
                className="h-40 w-40 bg-white"
            />
            <Text className="truncate text-sm">{title}</Text>
            <Text className="text-sm">{price}</Text>
        </div>
    );
};