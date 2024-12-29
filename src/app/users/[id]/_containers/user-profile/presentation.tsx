import { FC } from "react";
import { Flex, Image, Text } from "@mantine/core";
import Link from "next/link";

type Props = {
    username: string;
    displayName: string;
    discription: string;
    imageUrl: string;
};

export const UserProfilePresentation: FC<Props> = (props) => {
    const { username, displayName, discription, imageUrl } = props;

    return (
        <Flex direction="column" className="space-y-2">
            <Flex direction="row">
                <Link href="/home">
                    <Text className="text-xs">トップ </Text>
                </Link>
                <Text className="text-xs">/ {displayName}</Text>
            </Flex>
            <Flex direction="row" className="space-x-4">
                <Image
                    src={imageUrl}
                    alt=""
                    radius="md"
                    className="h-32 w-32 bg-white"
                />
                <Flex direction="column" className="sapce-y-4">
                    <Text>
                        {username} ({displayName})
                    </Text>
                    <Text>{discription}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
