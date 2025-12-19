"use client"

import StarGroup from '@/components/ui/starGroup';
import { Search } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

function ProductSearchForm() {

    const [text, setText] = useState("");
    const [searchData, setSearchData] = useState<IProduct[]>([]);

    useEffect(() => {
        if (!text.trim()) {
            return;
        }

        const getData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            const filtered = data.filter((item: IProduct) =>
                item.title.toLowerCase().includes(text.toLowerCase())
            );

            setSearchData(filtered);
        };

        const timer = setTimeout(() => {
            getData();
        }, 3000);

        return () => clearTimeout(timer);

    }, [text]);

    return (
        <div className='px-6 flex-1 '>
            <div className='relative'>
                <input value={text} onChange={(e) => setText(e.target.value)} className='border w-full p-2' type="text" placeholder="Search your products......." title="Search products" />
                <button className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:text-primary' title='search'>
                    <Search className='opacity-60' />
                </button>

                {text &&

                    <div className='absolute top-full left-0 w-full z-2 bg-white border flex flex-col justify-between'>

                        <div className='p-4 h-90 overflow-y-scroll'>
                            {searchData.length == 0 && <div className='text-center text-primary py-10'>No data Found</div>}
                            {searchData.map(item => (
                                <div className='flex mb-4 pb-4 border-b' key={item.id}>
                                    <div className='w-24'>
                                        <Image
                                            src={item.image}
                                            alt="product image"
                                            width={100}
                                            height={100}
                                            className='w-15 h-20'
                                        />
                                    </div>
                                    <div>
                                        <Link className='hover:text-primary' href={"/"}>{item.title}</Link>
                                        <StarGroup count={item.rating.rate} />
                                        <p className='text-xl font-semibold text-primary'>${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='py-1.5 border-t flex justify-center items-center'>
                            <Link className='hover:text-primary' href={"/"}>View all Products</Link>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default ProductSearchForm;