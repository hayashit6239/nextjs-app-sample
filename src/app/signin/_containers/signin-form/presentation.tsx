"use client";

import { Button, Flex, TextInput, LoadingOverlay, PasswordInput } from "@mantine/core";
import { FC, useActionState, useEffect } from "react";
import { postSigninForm } from "@/app/actions/signin";
import { useAuthContext } from "@/features/contexts/authContexts";
import { useRouter } from "next/navigation";
import { setCookieAction } from "@/app/actions/set-cookie";

export const SigninFormPresentation: FC = () => {
    const [state, formAction, pending] = useActionState(postSigninForm, {
        username: "",
        password: "",
    });
    const { setAuthUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!pending && state?.id && state?.imageUrl) {
            setAuthUser({
                id: state.id,
                name: state.name as string,
                imageUrl: state.imageUrl,
            });

            const setCookie = async (): Promise<void> => {
                await setCookieAction();
            };

            setCookie();

            router.push(`/users/${state.id}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <>
            <LoadingOverlay
                visible={pending}
                zIndex={200}
                overlayProps={{ radius: "sm", blur: 2 }}
                loaderProps={{ color: "red" }}
            />
            <form action={formAction}>
                <Flex direction="column" className="min-h-screen w-full items-center justify-center gap-y-4">
                    <TextInput
                        placeholder="ユーザー名"
                        className="w-2/3"
                        name="username"
                        error={state.zodErrors && state.zodErrors.username}
                    />
                    <PasswordInput
                        placeholder="パスワード"
                        className="w-2/3"
                        name="password"
                        error={state.zodErrors && state.zodErrors.password}
                    />
                    <Button type="submit" variant="filled" color="rgba(186, 4, 4, 1)" className="w-2/3">
                        サインイン
                    </Button>
                </Flex>
            </form>
        </>
    );
};
