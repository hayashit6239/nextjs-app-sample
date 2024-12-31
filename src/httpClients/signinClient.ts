import { User } from "@/common/types/data"

export type SigninClient = {
    signin: (
        username: string,
        password: string
    ) => Promise<{
        statusCode: number,
        response: User | null
    }>;
};

class SinginClientImpl implements SigninClient {

    public static instance = new SinginClientImpl();

    private constructor() { }

    public readonly signin = async (username: string, password: string): Promise<{ statusCode: number, response: User | null}> => {
        const response = await fetch("localhost:8000/auth/signin", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        });

        if (!response.ok) {
            console.log("error");
            return {
                statusCode: response.status,
                response: null
            };
        };

        return {
            statusCode: response.status,
            response: await response.json() as User
        };
    }
}

export const singingClient = SinginClientImpl.instance;