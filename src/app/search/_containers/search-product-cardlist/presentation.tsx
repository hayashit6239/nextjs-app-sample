"use client";

import { Product } from "@/features/types/data";
import { Checkbox, Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
    products: Product[];
};

type ConditionType = "new" | "used";

export const SearchProductCardListPresentation: FC<Props> = (props) => {
    const { products } = props;

    const [condition, setCondition] = useState<ConditionType[]>([]);

    const searchParams = useSearchParams();
    const paramsCategory = new URLSearchParams(searchParams).get("category") as "shoes" | "clothes" | "book" | null;

    const filteredProducts = products.filter((x) => {
        if (condition.length === 1 && x.condition !== condition[0]) {
            return false;
        }
        if (paramsCategory && x.category !== paramsCategory) {
            return false;
        }
        return true;
    });

    return (
        <Flex className="w-full h-full space-x-3">
            <FilterPanel setCondition={setCondition} />
            <ProductCardList
                productCards={filteredProducts.map((x) => ({
                    id: x.id,
                    title: x.title,
                    price: x.price,
                    imageUrl: x.imageUrl,
                    category: x.category,
                    condition: x.condition,
                }))}
            />
        </Flex>
    );
};

type FilterPanelProps = {
    setCondition: Dispatch<SetStateAction<ConditionType[]>>;
};

const FilterPanel: FC<FilterPanelProps> = (props) => {
    const { setCondition } = props;

    return (
        <Flex direction="column" className="h-full min-w-20 m-5 space-y-3">
            <div className="space-y-2">
                <Text className="font-bold">商品の状態</Text>
                <Checkbox
                    onChange={() => {
                        setCondition((prev) => {
                            return prev.indexOf("new") !== -1 ? prev.filter((x) => x !== "new") : [...prev, "new"];
                        });
                    }}
                    label="新品"
                    className="text-sm"
                />
                <Checkbox
                    onChange={() => {
                        setCondition((prev) => {
                            return prev.indexOf("used") !== -1 ? prev.filter((x) => x !== "used") : [...prev, "used"];
                        });
                    }}
                    label="中古"
                />
            </div>
            <div className="space-y">
                <Text className="font-bold">カテゴリ</Text>
                <Link href="/search">
                    <Text className="text-sm">すべて</Text>
                </Link>
                <Link href="/search?category=book">
                    <Text className="text-sm">本</Text>
                </Link>
                <Link href="/search?category=shoes">
                    <Text className="text-sm">シューズ</Text>
                </Link>
                <Link href="/search?category=clothes">
                    <Text className="text-sm">トップス</Text>
                </Link>
            </div>
        </Flex>
    );
};

type ProductCardListProps = {
    productCards: ProductCardProps[];
};

const ProductCardList: FC<ProductCardListProps> = (props) => {
    const { productCards } = props;

    return (
        <div className="space-y-3 p-3 flex-auto">
            <Flex wrap="wrap" className="gap-2">
                {productCards.map((x) => {
                    return <ProductCard key={x.id} id={x.id} title={x.title} price={x.price} imageUrl={x.imageUrl} />;
                })}
            </Flex>
        </div>
    );
};

type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

const ProductCard: FC<ProductCardProps> = (props) => {
    const { id, title, price, imageUrl } = props;

    return (
        <div key={id} className="font-bold relative">
            <Link href={`/products/${id}`}>
                <Image src={imageUrl} alt="" radius="md" className="h-48 w-48 bg-white mb-2" />
            </Link>
            <div className="absolute top-0 left-0 text-black">
                <Text className="truncate font-bold bg-white p-2">{title}</Text>
            </div>
            <div className="absolute top-10 left-0 text-black">
                <Text className="truncate font-bold bg-white p-1">{price}円</Text>
            </div>
        </div>
    );
};
