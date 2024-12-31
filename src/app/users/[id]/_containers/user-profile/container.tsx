import { UserProfilePresentation } from "./presentation";

export type User = {
    id: number;
    username: string;
    displayName: string;
    email: string;
    profileImageUrl: string;
    discription: string;
};

export async function UserProfileContainer({ id }: { id: number }) {
    try {
        // ISR で実装、10 秒間キャッシュされる
        const res = await fetch(`http://localhost:8000/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 10,
            },
        });

        const user = (await res.json()) as User;

        return (
            <UserProfilePresentation
                username={user.username}
                displayName={user.displayName}
                discription={user.discription}
                imageUrl={user.profileImageUrl}
            />
        );
    } catch {
        console.log("error");
    }
}
