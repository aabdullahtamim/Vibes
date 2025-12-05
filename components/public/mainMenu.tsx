import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/searchForm";
import Logo from "@/components/ui/logo";
import { GitCompareArrows, Heart } from "lucide-react";
import Link from "next/link";


function PublicMainMenu() {
    return (
        <div className="py-4">
            <div className="body-container">
                <div className="flex items-center">
                    <Link className="" href={"/"}>
                        <Logo />
                    </Link>
                    <ProductSearchForm />
                    <div >
                        <div className="flex gap-x-16">
                            <Link className="flex flex-col justify-center items-center" href={"/"}>
                                <GitCompareArrows size={22} />
                                <span className="text-xs mt-2">Compare</span>
                            </Link>
                            <Link className="flex flex-col justify-center items-center" href={"/"}>
                                <Heart size={22} />
                                <span className="text-xs mt-2">Favorite</span>
                            </Link>
                            <ProductCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicMainMenu;