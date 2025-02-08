import { Suspense } from "react";
import { HomeHeader } from "./_containers/home-header";
import { HomeProductCardList } from "./_containers/home-product-cardlist";
import Loading from "./loading";

/**
 * HomePage コンポーネントは、ホームページのレイアウトを定義します。
 * @returns {JSX.Element} ホームページの JSX 要素
 */
export default function HomePage() {
    return (
        <div className="px-20 space-y-8">
            <HomeHeader />
            <Suspense fallback={<Loading />}>
                <HomeProductCardList />
            </Suspense>
        </div>
    );
}
