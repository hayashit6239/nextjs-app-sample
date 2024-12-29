"use client";

import { FC } from "react";
import { useAuthContext } from "./authContexts";
import { useRouter } from "next/navigation";

export const AuthCheck: FC = () => {
    const { authUser } = useAuthContext();
    const router = useRouter();

    console.log("---------");
    console.log(authUser);
    console.log(router);

    return <></>;
};
