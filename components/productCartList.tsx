import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


function ProductCartList() {
    return (
        <div className="absolute z-9 w-70 h-85 top-full lg:-right-7 right-0 mt-3 border p-2 bg-white overflow-y-scroll">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="flex relative pb-4 mb-4  border-b" key={item} >
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="product image"
                        width={100}
                        height={100}
                        className='w-16'
                    />

                    <div className="px-2">
                        <Link href={"/"} className="hover:text-primary">
                            this is product link
                        </Link>
                        <small className="block">1 X $120.00</small>
                        <X className="w-4 absolute top-0 right-2 cursor-pointer text-primary " />
                    </div>

                </div>
            ))}
            <div>
                <h4 className="text-xl text-center text-black/50">Subtotal:<span className="text-black">$120.00</span></h4>
                <div className="p-2 flex justify-between">
                    <Button asChild><Link href={"/"}>Cart</Link></Button>
                    <Button asChild><Link href={"/"}>Checkout</Link></Button>
                </div>

            </div>
        </div>
    )
}

export default ProductCartList