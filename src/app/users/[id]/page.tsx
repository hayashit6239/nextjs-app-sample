import { Products } from "./_containers/products";
import { UserProfile } from "./_containers/user-profile";

type Props = {
    params: {
      id: string
    }
  }

export default async function UserHome({ params }: Props) {
    const { id } = await params;
    console.log("---**********--")
    console.log(id)

    if (typeof Number(id) !== "number" ) {
        return;
    };

    return (
        <div className="px-28 py-8 space-y-6">
            <UserProfile id={Number(id)} />
            <Products id={Number(id)} />
        </div>
    );
};

