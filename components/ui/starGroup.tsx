import { Star } from 'lucide-react'
import React from 'react'

function StarGroup({ count }: { count: number }) {
    return (
        <div className='flex gap-x-1 py-1'>
            {[1, 2, 3, 4, 5].map((data) => (
                <div key={data}>
                    {data > count ? <Star size={16} /> : <Star className='text-primary' size={16} />}
                </div>
            ))}
        </div>
    )
}

export default StarGroup