"use client";

import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
    return (
        <Flex
            direction="row"
            className="fixed bg-gray-950 bg-gradient-to-b from-gray-950 to-gray-900 w-full h-[80px] px-6 py-8 place-content-between items-center"
        >
            <Flex direction="row" className="space-x-3 items-center">
                <Link href="/home">
                    <Text className="text-red-700 font-bold text-2xl">
                        NextjsAppRouter
                    </Text>
                </Link>
                <Text className="text-sm">トップス</Text>
                <Text className="text-sm">本</Text>
                <Text className="text-sm">シューズ</Text>
            </Flex>
            <Flex>
                <Button className="font-bold" variant="filled" color="yellow">
                    出品
                </Button>
            </Flex>
        </Flex>
    );
};
