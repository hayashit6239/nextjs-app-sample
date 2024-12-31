"use client"

import { Button, Flex, Input, PasswordInput } from "@mantine/core"
import { FC } from "react";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

type LoginForm = {
    username: string
    password: string
};

export const SigninFormPresentation: FC = () => {
    const form = useForm<LoginForm>({
        initialValues: {
            username: "",
            password: ""
        }
    });

    const router = useRouter();

    const handleSubmit = form.onSubmit((values) => {
        console.log(values)
        const id = 1
        router.push(`/users/${id}`)
    })

    return (
        <form onSubmit={handleSubmit}>
            <Flex direction="column" className="min-h-screen w-full items-center justify-center gap-y-4">
                <Input
                    placeholder="ユーザー名"
                    className="w-1/3"
                    value={form.getInputProps("username").value}
                    onChange={event => form.setFieldValue("username", event.currentTarget.value)}
                />
                <PasswordInput
                    placeholder="パスワード"
                    className="w-1/3"
                    value={form.getInputProps("password").value}
                    onChange={event => form.setFieldValue("password", event.currentTarget.value)}
                />
                <Button
                    type="submit"
                    variant="filled"
                    color="rgba(186, 4, 4, 1)"
                    className="w-1/3"
                >
                    ログイン
                </Button>
            </Flex>
        </form>
    );
};
