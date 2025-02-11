import { Suspense } from "react";
import { UserProductCardList } from "./_containers/user-product-cardlist";
import { UserProfile } from "./_containers/user-profile";
import LoadingUserProfile from "./loading";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

/**
 * UserPage is a page component that fetches and displays a user's profile and products.
 *
 * @param {Props} props - The component's props.
 * @returns {JSX.Element} The UserPage component.
 */
export default async function UserPage({ params }: Props) {
    const { id } = await params;

    const userId = Number(id);

    if (typeof userId !== "number") {
        return;
    }

    return (
        <div className="space-y-6">
            <Suspense fallback={<LoadingUserProfile />}>
                <UserProfile id={userId} />
            </Suspense>
            <UserProductCardList id={userId} />
        </div>
    );
}
