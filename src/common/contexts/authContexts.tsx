"use client";

import { createContext, useContext, useState } from "react";
import { User } from "../types/data";

export type AuthUser = {
    id: number;
    name: string;
    imageUrl: string;
};

type AuthContextType = {
    authUser: AuthUser | null;
    setAuthUser: (authUser: AuthUser | null) => void;
    // isSignedIn: boolean;
};

type AuthContextProviderProps = {
    authUser?: User;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: React.PropsWithChildren<AuthContextProviderProps>) => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const setAuthUser = (authUser: AuthUser | null) => {
        setUser(authUser);
    };

    return <AuthContext.Provider value={{ authUser: user, setAuthUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
