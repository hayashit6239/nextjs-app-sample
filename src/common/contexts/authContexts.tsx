// wip
"use client"

import { createContext, useContext } from "react"
import { User } from "../types/data"

type AuthContextType = {
    authUser?: User
    authSignin: (username: string, password: string) => void
}

type AuthContextProviderProps = {
    authUser?: User
}

const AuthContext = createContext<AuthContextType>({
    authUser: undefined,
    authSignin: (username: string, password: string) => {
        console.log(username, password)
    }
});

export const useAuthContext = (): AuthContextType => useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({
    children
}: React.PropsWithChildren<AuthContextProviderProps>) => {
    // const [authUser, setAuthUser] = useState<User | undefined>(undefined);

    return (
        <AuthContext.Provider value={{ authUser }}>
            {children}
        </AuthContext.Provider>
    );
};