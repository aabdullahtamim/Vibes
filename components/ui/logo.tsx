import { ShoppingBag } from "lucide-react";


export default function Logo() {
    return (
        <div className="flex w-full items-center ">
            <ShoppingBag size={35} className="text-primary" />
            <span className="text-black/80 font-bold text-2xl">Vibes</span>
        </div>
    )
}
