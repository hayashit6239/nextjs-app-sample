import { FC } from "react";
import { Flex, Image, Text } from "@mantine/core";

type Props = {
    username: string,
    displayName: string,
    discription: string,
    imageUrl: string
};

export const UserProfilePresentation: FC<Props> = (props) => {
    const { username, displayName, discription, imageUrl } = props;
    console.log(imageUrl)
    return (
        <Flex direction="column" className="space-y-2">
            <Text className="text-xs">トップ/{displayName}</Text>
            <Flex direction="row" className="space-x-4">
                <Image
                    src={imageUrl}
                    alt=""
                    className="h-32 w-32 bg-white"
                />
                <Flex direction="column" className="sapce-y-4">
                    <Text>{username} ({displayName})</Text>
                    <Text>{discription}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};