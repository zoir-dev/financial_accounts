'use client'
import { Button, Input } from "@nextui-org/react"
import { ArrowUp, Plus, Search } from "lucide-react"
import { useState } from "react"
import Row from "./Row"

const UsersPage = () => {
    const [page, setPage] = useState(1)
    const [sortUp, setSortUp] = useState(false)

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h2 className="title">Foydalanuvchilar</h2>
                <Button color="primary" radius="sm" startContent={<Plus className="w-5" />}>
                    Foydalanuvchi qo&apos;shish
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-6 pb-6 pt-8">
                <div className="p-6 rounded-xl w-full bg-[#ECFDF3]">
                    <p className="text-success-700 text-sm pb-2">Barcha foydalanuvchilar</p>
                    <span className="text-success-700 text-4xl font-semibold">125</span>
                </div>
                <div className="p-6 rounded-xl w-full bg-[#EFF8FF]">
                    <p className="text-[#175CD3] text-sm pb-2">Aktiv foydalanuvchilar</p>
                    <span className="text-[#175CD3] text-4xl font-semibold">125</span>
                </div>
                <div className="p-6 rounded-xl w-full bg-[#FDF2FA]">
                    <p className="text-[#C11574] text-sm pb-2">Obunasi tugagan foydalanuvchilar</p>
                    <span className="text-[#C11574] text-4xl font-semibold">125</span>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-end">
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Qidirish'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-[320px]'
                    />
                </div>
                <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                    <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[550px]'>
                        <div className='text-gray-600 flex items-center justify-between gap-2 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-3">
                                    <p className="font-semibold text-sm text-black">Raqam</p>
                                    <div className="flex items-center gap-1 cursor-pointer w-max" onClick={() => setSortUp(!sortUp)}>
                                        <p className="text-sm text-gray-600">Logo va kompaniya nomi</p>
                                        <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                                    </div>
                                </div>
                                <div className="text-center w-full">
                                    <p className="text-sm text-gray-600">Raqami</p>
                                </div>
                            </div>
                            <div className="lg:w-full flex justify-center">
                                <p className="text-sm text-gray-600 w-max">Obuna tugash sanasi</p>
                            </div>
                        </div>
                        <div>
                            {data.sort((a: any, b: any) => sortUp ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).map(d => (
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
        </div>
    )
}

export default UsersPage


interface User {
    id: number,
    name: string,
    img: string,
    phone: string,
    date: string
}
const data: User[] = [
    {
        id: 1,
        name: "Catalog",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 2,
        name: "Catalog1",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 3,
        name: "Catalog2",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 4,
        name: "Catalog3",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 5,
        name: "Catalog4",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 6,
        name: "Catalog5",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
    {
        id: 7,
        name: "Catalog6",
        img: "https://picsum.photos/40",
        phone: "+998 94 222 22 22",
        date: "12.02.2025"
    },
]