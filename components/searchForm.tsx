import { Search } from "lucide-react"

function ProductSearchForm() {
    return (
        <div className="flex-1 px-6">
            <div className="relative">
                <input className="border w-full p-2" type="text" placeholder="Search products...." title="Search products" />
                <button className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:text-primary" title="search">
                    <Search />
                </button>
            </div>
        </div>
    )
}

export default ProductSearchForm