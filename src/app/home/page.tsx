import { HomeHeader } from "./_containers/home-header";
import { HomeProductCardList } from "./_containers/home-product-cardlist";

export default function HomePage() {
    return (
        <div className="px-20 space-y-8">
            <HomeHeader />
            <HomeProductCardList />
        </div>
    );
}
