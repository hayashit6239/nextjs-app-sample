import { ProductDetail } from "./_containers/product-detail";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({ params }: Props) {
    const { id } = await params;

    const productId = Number(id);

    if (typeof productId !== "number") {
        return;
    }

    return (
        <div className="px-10">
            <ProductDetail productId={productId} />
        </div>
    );
}
