"use client";

import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/searchForm";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";


function MainMenuMobile() {

    const [active, setActive] = useState(false);

    return (
        <div className="flex justify-end gap-x-5 ">
            <Search onClick={() => setActive(true)} className="hover:text-primary cursor-pointer" />
            <Menu className="hover:text-primary cursor-pointer" />
            <ProductCart />

            {active &&
                <div className="absolute top-0 left-0 w-full h-full p-2 border-b bg-white flex justify-between items-center">
                    <div className="w-full ">
                        <ProductSearchForm />
                    </div>
                    <div className="mr-4 -ml-1">
                        <X onClick={() => setActive(false)} className="cursor-pointer hover:text-primary" />
                    </div>
                </div>

            }

        </div>
    )
}

export default MainMenuMobile;