'use client'
import { Button, Input } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import Row from './Row'

const CategoryPage = () => {
    const [sortUp, setSortUp] = useState(false)
    const [page, setPage] = useState(1)
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex gap-4 lg:items-center justify-between flex-col lg:flex-row'>
                <h2 className="title">Barcha kategoriyalar</h2>
                <div className='flex items-start sm:items-center flex-col-reverse sm:flex-row gap-6 sm:gap-4'>
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Search'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-[320px]'
                    />
                    <Button color='primary' radius='sm' startContent={<Plus className='!w-5' />} >
                        Kategoriya qo&apos;shish
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[500px]'>
                    <div className='text-gray-600 flex items-center justify-between pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                        <p className="text-sm w-1/4">Nomi</p>
                        <div className="flex items-center gap-1 cursor-pointer justify-center w-1/4" onClick={() => setSortUp(!sortUp)}>
                            <p className="text-sm text-gray-600">Ball</p>
                            <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                        </div>
                        <p className="text-sm text-gray-600 text-center w-1/4">Reyting</p>
                        <p className=" w-1/4"></p>
                    </div>
                    <div>
                        {data.sort((a: any, b: any) => sortUp ? a.ball - b.ball : b.ball - a.ball).map((d) => (
                            <Row d={d} key={d.id} />
                        ))}
                    </div>
                    <div className='flex items-center justify-between pt-3 px-4 sm:px-6'>
                        <Button variant='bordered' radius='sm'
                            onClick={() => setPage(page > 1 ? page - 1 : page)}>
                            <p className='hidden sm:flex'>
                                Previous
                            </p>
                            <ArrowUp className='sm:hidden -rotate-90 text-text3 w-5' />
                        </Button>
                        <p className='text-base text-[#344054] font-semibold'>{page}/10 Sahifa</p>
                        <Button variant='bordered' radius='sm'
                            onClick={() => setPage(page < 10 ? page + 1 : page)}>
                            <p className='hidden sm:flex'>
                                Next
                            </p>
                            <ArrowUp className='sm:hidden rotate-90 text-text3 w-5' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage


const data = [
    {
        id: 0,
        name: 'Discover invest',
        ball: 1
    },
    {
        id: 1,
        name: 'Discover invest',
        ball: 1542
    },
    {
        id: 2,
        name: 'Discover invest',
        ball: 1543
    },
    {
        id: 3,
        name: 'Discover invest',
        ball: 1544
    },
    {
        id: 4,
        name: 'Discover invest',
        ball: 1546
    },
    {
        id: 5,
        name: 'Discover invest',
        ball: 1547
    }
]