import Image from 'next/image'
import React from 'react'

const Row = ({ d }: { d: any }) => {
    return (
        <div className='flex items-center justify-between px-6 py-4 border-b border-default-200'>
            <div className="flex items-center w-full">
                <div className="flex items-center gap-3">
                    <p className=" text-sm text-black w-10 sm:w-12">{d?.id}</p>
                    <div className="flex items-center justify-between w-[170px]">
                        <p className="text-sm font-semibold ">{d?.full_name}</p>
                        {d?.img && <Image src={d?.img} alt='logo' width={40} height={40} className='rounded-full' />}
                    </div>
                </div>
                <div className="text-center w-full">
                    <a href={`tel: ${d?.phone}`} className="text-sm text-gray-600 text-nowrap flex-nowrap">{d?.phone}</a>
                </div>
            </div>
            <div className="w-[138px] lg:w-full text-center">
                <p className="text-sm text-gray-600">{d?.exp_pay?.slice(0, 10).replaceAll('-', '.')}</p>
            </div>
        </div>
    )
}

export default Row