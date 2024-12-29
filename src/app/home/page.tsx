// import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { HomeHeader } from "./_containers/home-header";
import { HomeProductCardList } from "./_containers/home-product-cardlist";
import Loading from "./loading";
// import Error from "./error";

export default function HomePage() {
    return (
        <div className="px-20 space-y-8">
            <HomeHeader />
            {/* <ErrorBoundary fallback={<Error error="失敗しています" />}> */}
            <Suspense fallback={<Loading />}>
                <HomeProductCardList />
            </Suspense>
            {/* </ErrorBoundary> */}
        </div>
    );
}
