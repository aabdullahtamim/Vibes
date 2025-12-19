
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigationStore } from "@/store/navigation.store";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const categoriesData = [
    {
        "id": "1",
        "title": "Men Clothing",
        "link": "/men-clothing",
        "image": "men_main.jpg",
        "isActive": true,
        "children": []
    },
    {
        "id": "2",
        "title": "Women Clothing",
        "link": "/women-clothing",
        "image": "women_main.jpg",
        "isActive": false,
        "children": [
            {
                "id": "2-1",
                "title": "Women Underwear",
                "link": "/women-clothing/underwear",
                "image": "underwear.jpg",
                "isActive": true,
                "children": [
                    {
                        "id": "2-1-1",
                        "title": "Women Underwear",
                        "link": "/women-clothing/underwear/inner",
                        "image": "inner.jpg",
                        "isActive": true,
                        "children": []
                    },
                    {
                        "id": "2-1-2",
                        "title": "Weddings & Events",
                        "link": "/women-clothing/underwear/wedding",
                        "image": "wedding_inner.jpg",
                        "isActive": true,
                        "children": []
                    }
                ]
            },
            {
                "id": "2-2",
                "title": "Weddings & Events",
                "link": "/women-clothing/weddings",
                "image": "wedding.jpg",
                "isActive": true,
                "children": []
            },
            {
                "id": "2-3",
                "title": "Bottoms",
                "link": "/women-clothing/bottoms",
                "image": "bottoms.jpg",
                "isActive": true,
                "children": []
            },
            {
                "id": "2-4",
                "title": "Women Fashion",
                "link": "/women-clothing/fashion",
                "image": "fashion.jpg",
                "isActive": true,
                "children": []
            },
            {
                "id": "2-5",
                "title": "Accessories",
                "link": "/women-clothing/accessories",
                "image": "accessories.jpg",
                "isActive": true,
                "children": []
            }
        ]
    },
    {
        "id": "3",
        "title": " Children",
        "link": "/women-clothing",
        "image": "women_main.jpg",
        "isActive": false,
        "children": [
            {
                "id": "3-1",
                "title": "Children Underwear",
                "link": "/women-clothing/underwear",
                "image": "underwear.jpg",
                "isActive": true,
                "children": [
                    {
                        "id": "3-1-1",
                        "title": "Children Underwear",
                        "link": "/women-clothing/underwear/inner",
                        "image": "inner.jpg",
                        "isActive": true,
                        "children": []
                    },
                    {
                        "id": "3-1-2",
                        "title": "Weddings & Events",
                        "link": "/women-clothing/underwear/wedding",
                        "image": "wedding_inner.jpg",
                        "isActive": true,
                        "children": []
                    }
                ]
            },
            {
                "id": "3-2",
                "title": "Weddings & Events",
                "link": "/women-clothing/weddings",
                "image": "wedding.jpg",
                "isActive": true,
                "children": []
            },
            {
                "id": "3-3",
                "title": "Bottoms",
                "link": "/women-clothing/bottoms",
                "image": "bottoms.jpg",
                "isActive": true,
                "children": []
            },

        ]
    },


]

function MobileNavigation() {

    const { isActive, updateActive, categories, updateCategories } = useNavigationStore();


    useEffect(() => {
        // Fetching data form database;
        updateCategories(categoriesData)
    }, [updateCategories])

    const updateCollapse = (id: string) => {
        const updateCategoriesData = categories.map(cat => {
            if (cat.id == id) {
                return {
                    ...cat,
                    isActive: !cat.isActive
                }
            } else {
                return cat;
            }
        })
        updateCategories(updateCategoriesData)
    }

    return (
        <>
            {isActive &&
                <div className="w-[250px] h-screen shadow-xl fixed top-0 left-0 z-3 bg-white lg:hidden">
                    <div className="bg-primary p-2 h-10 flex items-center justify-between">
                        <h2 className="text-white pl-2 text-xl ">Navigation</h2>
                        <X onClick={() => updateActive(false)} className="text-white p-0.5 mr-2 cursor-pointer" />
                    </div>
                    <div>
                        <Tabs defaultValue="menu" className="w-full">
                            <TabsList className="w-full rounded-none">
                                <TabsTrigger className="rounded-none" value="menu">Menu</TabsTrigger>
                                <TabsTrigger className="rounded-none" value="category">Category</TabsTrigger>
                            </TabsList>
                            <TabsContent value="menu">
                                <div>
                                    <ul className=" pl-5">
                                        <li>
                                            <Link className="flex items-center pr-6 hover:text-primary" href={"/"}>Home</Link>
                                        </li>
                                        <li>
                                            <Link className="flex items-center pr-6 hover:text-primary" href={"/"}>Shop</Link>
                                        </li>
                                        <li>
                                            <Link className="flex items-center pr-6 hover:text-primary" href={"/"}>Campaign</Link>
                                        </li>
                                        <li>
                                            <Link className="flex items-center pr-6 hover:text-primary" href={"/"}>Blog</Link>
                                        </li>
                                        <li >
                                            <Link className="flex items-center pr-6 hover:text-primary" href={"/"}>
                                                Pages
                                                <ChevronDown className="w-4 mt-1" />
                                            </Link>
                                            <ul className=" bg-white p-3 shadow-lg border-t-3 border-t-primary mr-5 mb-2">
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> About us</Link>
                                                </li>
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> How it works</Link>
                                                </li>
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> Terms & services</Link>
                                                </li>
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> Return Policy</Link>
                                                </li>
                                                <li>
                                                    <Link className="flex items-center hover:text-primary pb-0.5" href={"/"}> <ChevronRight className="w-4" /> Inform us</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link className="flex items-center pr-4 hover:text-primary" href={"/"}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="category">
                                <div className="p-3 overflow-y-scroll h-[calc(100vh-100px)]">
                                    <ul>
                                        {categories.map(category => (
                                            <li key={category.id} className="flex flex-wrap justify-between items-center group my-1">
                                                <Link className="flex group-hover:text-primary" href={"/"}><ChevronRight width={18} /> {category.title}</Link>
                                                {category.children.length > 0 &&
                                                    <>
                                                        <span onClick={() => updateCollapse(category.id)} className="w-5 h-5 bg-gray-200 flex-box hover:bg-primary cursor-pointer">
                                                            <ChevronDown className="group-hover:text-primary hover:text-white" />
                                                        </span>
                                                        {category.isActive &&
                                                            <ul className="w-full border-l ml-5 pl-4">
                                                                {category.children.map(sub => (
                                                                    <li key={sub.id} className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                                        <Link className="hover:text-primary" href={"/"}>{sub.title}</Link>
                                                                        {sub.children.length > 0 &&
                                                                            <ul className="w-full border-l pl-4">
                                                                                {sub.children.map(extraSub => (
                                                                                    <li key={extraSub.id} className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                                                        <Link className="hover:text-primary" href={"/"}> {extraSub.title}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        }
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </>
                                                }
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            }

        </>
    )
}

export default MobileNavigation;