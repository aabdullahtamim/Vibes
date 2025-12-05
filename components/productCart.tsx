import { ShoppingCart } from "lucide-react";
import Link from "next/link";


function ProductCart() {
    return (
        <div>
            <Link className="flex flex-col justify-center items-center" href={"/"}>
                <ShoppingCart size={22} />
                <span className="text-xs mt-2">Cart</span>
            </Link>
        </div>
    )
}

export default ProductCart;