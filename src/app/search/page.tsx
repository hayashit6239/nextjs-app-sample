import { Suspense } from "react";
import { SearchProductCatdList } from "./_containers/search-product-cardlist";
import Loading from "./loading";

export default function SearchPage() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <SearchProductCatdList />
            </Suspense>
        </div>
    );
}
