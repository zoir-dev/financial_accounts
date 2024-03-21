'use client'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { Button, Input, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import Row from './Row'
import AddModal from './AddModal'

const UserPage = () => {
    const [page, setPage] = useState(1)
    const [sortUp, setSortUp] = useState(false)

    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex gap-4 lg:items-center justify-between flex-col lg:flex-row'>
                <h2 className="title">
                    Tashkilot
                </h2>
                <div className='flex items-start sm:items-center flex-col-reverse sm:flex-row gap-6 sm:gap-4'>
                    <Select variant='bordered' color='primary' className='w-[180px] hidden md:flex' placeholder='Viloyat' radius='sm' classNames={{ value: 'text-base' }} startContent={<Search className='text-gray-500 w-5' />}>
                        <SelectItem key='1' value='1'>
                            1
                        </SelectItem>
                        <SelectItem key='2' value='2'>
                            2
                        </SelectItem>
                        <SelectItem key='3' value='3'>
                            3
                        </SelectItem>
                    </Select>
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='STIR'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-[180px] hidden md:flex'
                    />
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Nomi'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-[180px]'
                    />
                    <Button color='primary' radius='sm' startContent={<Plus />} onClick={onOpen}>
                        Tashkilot q&apos;shish
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[500px]'>
                    <div className='text-gray-600 flex items-center justify-between gap-2 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                        <div className="flex items-center w-1/2 sm:w-full">
                            <p className="text-sm">Nomi</p>
                        </div>
                        <div className="text-center w-full flex items-center">
                            <div className="flex items-center gap-1 cursor-pointer w-max" onClick={() => setSortUp(!sortUp)}>
                                <p className="text-sm text-gray-600">Ball</p>
                                <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                            </div>
                            <div className="w-full">
                                <p></p>
                                <p className="text-sm text-gray-600">Reyting</p>
                                <p className="text-sm text-gray-600 w-max"></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {data.sort((a: any, b: any) => sortUp ? a.ball - b.ball : b.ball - a.ball).map((d) => (
                            <Row d={d} key={d.id} index={data.findIndex(a => a.id === d.id)} />
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
            <AddModal isOpen={isOpen} onClose={onClose} data={data[0]} setData={() => { }} />
        </div>
    )
}

export default UserPage


const data = [
    {
        id: 0,
        name: 'Discover invest',
        ball: 123
    },
    {
        id: 1,
        name: 'Discover invest',
        ball: 124
    },
    {
        id: 2,
        name: 'Discover invest',
        ball: 125
    },
    {
        id: 3,
        name: 'Discover invest',
        ball: 126
    },
    {
        id: 4,
        name: 'Discover invest',
        ball: 127
    },
    {
        id: 5,
        name: 'Discover invest',
        ball: 128
    },
]