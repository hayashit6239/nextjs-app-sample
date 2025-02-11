"use client";

import { Button, Flex, LoadingOverlay, NumberInput, Select, Text, Textarea, TextInput } from "@mantine/core";
import { FC, useActionState } from "react";
import { postSellForm } from "@/app/actions/sell";
import { useAuthContext } from "@/features/contexts/authContexts";
import { useRouter } from "next/navigation";
import Form from "next/form";

export const SellFromPresentation: FC = () => {
    const [state, formAction, pending] = useActionState(postSellForm, {
        imageUrl: "",
        title: "",
        description: "",
        category: null,
        price: 0,
        condition: null,
    });
    const { authUser } = useAuthContext();
    const router = useRouter();

    if (!authUser) {
        router.push("/signin");
        console.log(state);
    }

    return (
        <>
            <Form action={formAction}>
                <Flex direction="column" className="h-full w-full items-center justify-center gap-y-12 py-10">
                    <div className="w-2/3 space-y-1">
                        <Text className="font-bold text-lg">商品の写真 URL</Text>
                        <TextInput
                            name="imageUrl"
                            placeholder="URL"
                            error={state.zodErrors && state.zodErrors.imageUrl}
                        />
                    </div>
                    <div className="w-2/3 space-y-2 -mt-6">
                        <Text className="font-bold text-lg">商品情報</Text>
                        <TextInput name="title" label="タイトル" placeholder="商品のタイトル" />
                        <Textarea name="description" label="説明" placeholder="商品の説明" minRows={5} autosize />
                        <Select
                            name="category"
                            label="カテゴリ"
                            placeholder="カテゴリ"
                            data={[
                                { label: "シューズ", value: "shoes" },
                                { label: "本", value: "book" },
                                { label: "服", value: "clothes" },
                            ]}
                            styles={{
                                option: {
                                    color: "black",
                                },
                            }}
                        />
                        <Select
                            name="condition"
                            label="商品の状態"
                            placeholder="商品の状態"
                            data={[
                                { label: "新品", value: "new" },
                                { label: "中古", value: "used" },
                            ]}
                            styles={{
                                option: {
                                    color: "black",
                                },
                            }}
                        />
                        <NumberInput name="price" label="値段" placeholder="商品の値段" className="" />
                    </div>
                    <Button type="submit" variant="filled" color="yellow" className="w-2/3 h-10">
                        <LoadingOverlay
                            visible={pending}
                            zIndex={200}
                            overlayProps={{ radius: "sm", blur: 2 }}
                            loaderProps={{ color: "red" }}
                        />
                        出品
                    </Button>
                </Flex>
            </Form>
        </>
    );
};
