import { Product } from "@/common/types/data";
import { Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type Props = {
    product: Product;
};
export const ProductDetailPresentation: FC<Props> = (props) => {
    const { product } = props;
    return (
        <Flex direction="column" className="h-screen w-full space-y-3">
            <Flex className="text-sm gap-1">
                <Link href="/search">トップ</Link>/
                <Link href={`/search?condition=${product.condition}`}>{product.condition}</Link>/
                <Link href={`/search?category=${product.category}`}>{product.category}</Link>/{product.title}
            </Flex>
            <Flex className="space-x-4 h-1/2">
                <div className="w-1/2">
                    <Image src={product.imageUrl} alt="" radius="md" className="h-full bg-white mb-2" />
                </div>
                <div className="w-1/2 overflow-auto">
                    <Text>{product.description}</Text>
                </div>
            </Flex>
            <Flex className="space-x-4">
                <div className="w-1/2">
                    <ProductOwnerProfile
                        id={product.owner.id}
                        displayName={product.owner.displayName}
                        profileImageUrl={product.owner.profileImageUrl}
                    />
                </div>
                <div className="w-1/2">iamge</div>
            </Flex>
        </Flex>
    );
};

type ProductOwnerProfileProps = {
    id: number;
    displayName: string;
    profileImageUrl: string;
};

const ProductOwnerProfile: FC<ProductOwnerProfileProps> = (props) => {
    const { id, displayName, profileImageUrl } = props;

    return (
        <Flex direction="column" className="space-y-2">
            <Text className="text-lg font-bold">出品者</Text>
            <Flex className="space-x-4">
                <Link href={`/users/${id}`}>
                    <Image src={profileImageUrl} alt="" radius="md" className="w-32 h-32 bg-white mb-2" />
                </Link>
                <div className="space-y-1">
                    <Text className="text-sm">{displayName}</Text>
                    <Text className="text-sm">xxx</Text>
                </div>
            </Flex>
        </Flex>
    );
};
