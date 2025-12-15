"use client";

import ProductCartList from '@/components/productCartList'
import ActiveOverlay from '@/components/ui/activeOverlay';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react';

function ProductCart() {

    const [active, setActive] = useState(false);

    return (
        <div className="flex-box flex-col relative">
            <Link href={"/"} onClick={() => setActive(true)}>
                <span className="absolute -top-1.5 -right-2.5 min-w-4 h-4 text-xs flex-box bg-primary text-white rounded-full">0</span>
                <ShoppingCart size={22} />
                <span className="text-xs mt-2 hidden lg:block">Cart</span>
            </Link>
            {active && <ProductCartList />}

            <ActiveOverlay onClick={() => setActive(false)} isActive={active} />
        </div>
    )
}


export default ProductCart;