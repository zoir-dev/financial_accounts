import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Row = ({ d }: { d: any }) => {
    return (
        <div className='flex items-center justify-between px-6 py-4 border-b-1 border-default-200'>
            <div className="flex items-center w-full">
                <div className="w-full flex items-center gap-3">
                    <p className=" text-sm text-black w-4 sm:w-12">{d?.id}</p>
                    <Link href={'/users/' + d?.id} className='hover:text-primary'>
                        <p className="text-sm font-semibold ">{d?.full_name}</p>
                    </Link>
                </div>
                <div className="text-center w-full">
                    <a href={`tel: ${d?.phone}`}
                        className="text-sm text-success-700 bg-success-50 rounded-2xl py-[2px] px-2 text-nowrap flex-nowrap">
                        {d?.phone}
                    </a>
                </div>
            </div>
            <div className="w-[138px] lg:w-full text-center flex justify-center">
                <p className="text-sm text-[#333333] py-[2px] px-2 bg-[#E6BBAA] rounded-2xl w-max">{d?.exp_pay?.slice(0, 10).replaceAll('-', '.')}</p>
            </div>
        </div>
    )
}

export default Row