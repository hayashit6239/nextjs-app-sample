"use client";

import { Product } from "@/common/types/data";
import { Flex, Image, Text } from "@mantine/core";
import { FC } from "react";

type Props = {
    products: Product[];
};

export const UserProductCardListPresentation: FC<Props> = (props) => {
    const { products } = props;

    return (
        <Flex wrap="wrap" className="h-full gap-x-4 gap-y-4">
            {products.map((x) => {
                return (
                    <UserProductCard
                        key={x.id}
                        id={x.id}
                        title={x.title}
                        price={x.price}
                        imageUrl={x.imageUrl}
                    />
                );
            })}
        </Flex>
    );
};

type ProductCard = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

const UserProductCard: FC<ProductCard> = (props) => {
    const { id, title, price, imageUrl } = props;

    return (
        <div key={id} className="font-bold">
            <Image
                src={imageUrl}
                alt=""
                radius="md"
                className="h-40 w-52 bg-white mb-2"
            />
            <Text className="truncate text-sm font-bold">{title}</Text>
            <Text className="text-sm font-bold">{price}</Text>
        </div>
    );
};
