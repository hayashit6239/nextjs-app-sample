"use client";

import { useAuthContext } from "@/features/contexts/authContexts";
import { Button, Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";

export const Header: FC = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const router = useRouter();

    const handleSignout = useCallback(async () => {
        const res = await fetch("/api/signout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: authUser?.id,
            }),
        });

        if (!res.ok) {
            console.log("error");
            console.log(res);
        }

        setAuthUser(null);
        router.push("/signin");
    }, [authUser?.id, router, setAuthUser]);

    return (
        <Flex
            direction="row"
            className="fixed bg-gray-950 bg-gradient-to-b from-gray-950 to-gray-900 w-full h-[80px] px-6 py-8 place-content-between items-center"
        >
            <Flex direction="row" className="space-x-3 items-center">
                <Link href="/home">
                    <Text className="text-red-700 font-bold text-2xl">NextjsAppRouter</Text>
                </Link>
                <Link href="/search">
                    <Text className="text-sm">すべて</Text>
                </Link>
                <Link href="/search?category=clothes">
                    <Text className="text-sm">トップス</Text>
                </Link>
                <Link href="/search?category=book">
                    <Text className="text-sm">本</Text>
                </Link>
                <Link href="/search?category=shoes">
                    <Text className="text-sm">シューズ</Text>
                </Link>
            </Flex>
            {authUser ? (
                <Flex className="space-x-3">
                    <Link href={`/users/${authUser.id}`}>
                        <Image src={authUser.imageUrl} alt="" radius="md" className="h-9 w-9 bg-white" />
                    </Link>
                    <Link href={`/sell`}>
                        <Button className="font-bold" variant="filled" color="yellow">
                            出品
                        </Button>
                    </Link>
                    <Button className="font-bold" variant="filled" color="red" onClick={handleSignout}>
                        サインアウト
                    </Button>
                </Flex>
            ) : (
                <Button
                    className="font-bold"
                    variant="filled"
                    color="yellow"
                    onClick={async () => router.push("/signin")}
                >
                    サインイン
                </Button>
            )}
        </Flex>
    );
};
