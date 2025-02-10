import { Suspense } from "react";
import { UserProductCardList } from "./_containers/user-product-cardlist";
import { UserProfile } from "./_containers/user-profile";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function UserPage({ params }: Props) {
    const { id } = await params;

    const userId = Number(id);

    if (typeof userId !== "number") {
        return;
    }

    return (
        <div className="px-28 py-8 space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
                <UserProfile id={userId} />
            </Suspense>
            <UserProductCardList id={userId} />
        </div>
    );
}
