"use client"

import { Button, Flex, Text } from "@mantine/core"
import { FC } from "react"

export const Header: FC = () => {
    return (
        <Flex direction="row" className="w-full h-[80px] px-6 py-8 place-content-between items-center bg-gray-950">
            <Flex direction="row" className="space-x-3 items-center">
                <Text
                    className="text-red-700 font-bold text-xl"
                >
                    NextAppRouter
                </Text>
                <Text className="text-sm">
                    トップス
                </Text>
                <Text className="text-sm">
                    本
                </Text>
                <Text className="text-sm">
                    シューズ
                </Text>
            </Flex>
            <Flex>
                <Button
                    className="font-bold"
                    variant="filled"
                    color="yellow"
                >
                    出品
                </Button>
            </Flex>
        </Flex>
    )
}