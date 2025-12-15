"use client"

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuData = [1, 2, 3, 4, 5];

function Navbar() {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className="bg-white border-t hidden lg:block">
                <div className="body-container">
                    <div className="flex">
                        <div className="relative">
                            <h4 onClick={() => setActive(!active)} className="p-2 h-11 w-[250px] bg-primary cursor-pointer flex items-center gap-x-2 text-white">
                                <Menu />
                                <span className="text-lg">Categories</span>
                            </h4>
                            {active &&

                                <div className="absolute top-full left-0 w-full bg-white z-1 py-3">
                                    {menuData.map((item, index) => (
                                        <div key={item} className={`${(menuData.length - 1) == index ? "" : "border-b"} px-1 flex items-center cursor-pointer group`}>
                                            <Image
                                                src="https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1629616281pexels-moose-photos-1036627.jpg"
                                                alt="category image"
                                                width={50}
                                                height={50}
                                                className='w-14 h-14 p-2 object-cover group-hover:rotate-y-180'
                                            />
                                            <span className="block pl-1 group-hover:text-primary">Men Clothing</span>
                                            <ChevronRight className="w-5 mt-1 ml-auto" />

                                            <div className="absolute h-full w-full left-full top-0 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                                                <ul className="">
                                                    <li className="">
                                                        <Link className="w-full flex justify-between py-3 border-b px-2 hover:text-primary " href={""}>
                                                            Sub Category Item
                                                            <ChevronRight className="w-5" />
                                                        </Link>

                                                        <div className="absolute h-full w-full left-full top-0 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                                                            <ul className="">
                                                                {menuData.map((item) => (
                                                                    <li key={item} className="">
                                                                        <Link className="w-full flex justify-between py-3 border-b px-2 hover:text-primary " href={""}>
                                                                            Extra Sub Category Item
                                                                            <ChevronRight className="w-5" />
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }

                        </div>
                        <div>
                            <ul className="flex pl-5">
                                <li>
                                    <Link className="flex items-center h-11 pr-6 hover:text-primary" href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="flex items-center h-11 pr-6 hover:text-primary" href={"/"}>Shop</Link>
                                </li>
                                <li>
                                    <Link className="flex items-center h-11 pr-6 hover:text-primary" href={"/"}>Campaign</Link>
                                </li>
                                <li>
                                    <Link className="flex items-center h-11 pr-6 hover:text-primary" href={"/"}>Blog</Link>
                                </li>
                                <li className="relative group">
                                    <Link className="flex items-center h-11 pr-6 hover:text-primary" href={"/"}>
                                        Pages
                                        <ChevronDown className="w-4 mt-1" />
                                    </Link>
                                    <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white p-3 shadow-xl absolute top-full left-0 w-43 border-t-3 border-t-primary">
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
                                    <Link className="flex items-center h-11 pr-4 hover:text-primary" href={"/"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[250px] h-screen shadow-xl fixed top-0 left-0 bg-white z-3">
                <div className="bg-primary h-10">
                    <h2 className="text-white pl-2 text-xl p-2 h-10 flex items-center">Navigation</h2>
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
                            <div className="p-3">
                                <ul>
                                    <li className="flex flex-wrap justify-between items-center group my-1">
                                        <Link className="flex group-hover:text-primary" href={"/"}><ChevronRight width={18} /> Men Clothing</Link>
                                        <span className="w-5 h-5 bg-gray-200 flex-box hover:bg-primary cursor-pointer">
                                            <ChevronDown className="group-hover:text-primary hover:text-white" />
                                        </span>
                                    </li>
                                    <li className="flex flex-wrap justify-between items-center group my-1 ">
                                        <Link className="flex group-hover:text-primary" href={"/"}><ChevronRight width={18} />Women Clothing</Link>
                                        <span className="w-5 h-5 bg-gray-200 flex-box hover:bg-primary cursor-pointer">
                                            <ChevronDown className="group-hover:text-primary hover:text-white" />
                                        </span>

                                        <ul className="w-full border-l ml-5 pl-4">
                                            <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                <Link className="hover:text-primary" href={"/"}> Women Underwear</Link>

                                                <ul className="w-full border-l pl-4">
                                                    <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                        <Link className="hover:text-primary" href={"/"}> Women Underwear</Link>
                                                    </li>
                                                    <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                        <Link className="hover:text-primary" href={"/"}>Weddings & Events</Link>
                                                    </li>
                                                    <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                        <Link className="hover:text-primary" href={"/"}>Bottoms</Link>
                                                    </li>
                                                    <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                        <Link className="hover:text-primary" href={"/"}>Women Fashion</Link>
                                                    </li>
                                                    <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                        <Link className="hover:text-primary" href={"/"}>Accessories</Link>
                                                    </li>
                                                </ul>

                                            </li>
                                            <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                <Link className="hover:text-primary" href={"/"}>Weddings & Events</Link>
                                            </li>
                                            <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                <Link className="hover:text-primary" href={"/"}>Bottoms</Link>
                                            </li>
                                            <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                <Link className="hover:text-primary" href={"/"}>Women Fashion</Link>
                                            </li>
                                            <li className=" my-1 relative before:absolute before:-left-4 before:top-3 before:w-2.5 before:border-t before:opacity-30">
                                                <Link className="hover:text-primary" href={"/"}>Accessories</Link>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className=" my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={18} /> Women Clothing</Link>
                                    </li>
                                    <li className=" my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={18} /> Boys Clothing</Link>
                                    </li>
                                    <li className=" my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={18} /> Girls Clothing</Link>
                                    </li>
                                    <li className=" my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={18} /> Kids Clothing</Link>
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Navbar;