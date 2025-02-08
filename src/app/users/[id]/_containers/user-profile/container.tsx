import { User } from "@/common/types/data";
import { UserProfilePresentation } from "./presentation";

/**
 * UserProfileContainer is a container component that fetches user data based on the provided user ID.
 *
 * @param id - The ID of the user.
 * @returns {Promise<JSX.Element>} The presentation component UserProfilePresentation with the user data.
 * @throws Error if the fetch request fails or returns an error response.
 */
export async function UserProfileContainer({ id }: { id: number }) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);

    if (!res.ok) {
        const error = await res.json();
        console.log(error);
        throw new Error(error.error || `Failed to fetch product (status: ${res.status})`);
    }

    const user = (await res.json()) as User;
    return (
        <UserProfilePresentation
            username={user.username}
            displayName={user.displayName}
            discription={user.description}
            imageUrl={user.profileImageUrl}
        />
    );
}
