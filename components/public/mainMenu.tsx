import ProductCart from "@/components/productCart";
import MainMenuMobile from "@/components/public/mainMenuMobile";
import ProductSearchForm from "@/components/searchForm";
import Logo from "@/components/ui/logo";
import { GitCompareArrows, Heart } from "lucide-react";
import Link from "next/link";


function PublicMainMenu() {
    return (
        <div className="py-4 relative">
            <div className="body-container">
                <div className="flex items-center">
                    <Link className="" href={"/"}>
                        <Logo />
                    </Link>
                    <div className="flex-1 hidden  lg:flex">
                        <ProductSearchForm />
                        <div className="pr-7">
                            <div className="flex gap-x-16 pl-5">
                                <Link className="flex-box flex-col relative" href={"/"}>
                                    <span className="absolute -top-1.5 right-0 min-w-4 h-4 text-xs flex-box bg-primary text-white rounded-full">0</span>
                                    <GitCompareArrows size={22} />
                                    <span className="text-xs mt-2">Compare</span>
                                </Link>
                                <Link className="flex-box flex-col relative" href={"/"}>
                                    <span className="absolute -top-1.5 right-0 min-w-4 h-4 text-xs flex-box bg-primary text-white rounded-full">0</span>
                                    <Heart size={22} />
                                    <span className="text-xs mt-2">Favorite</span>
                                </Link>
                                <ProductCart />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 lg:hidden">
                        <MainMenuMobile />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PublicMainMenu;