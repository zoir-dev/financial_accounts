'use client'
import { Button, Input, Spinner, useDisclosure } from "@nextui-org/react"
import { ArrowUp, Plus, Search } from "lucide-react"
import { useEffect, useState } from "react"
import Row from "./Row"
import { http } from "@/utils/http"
import toast from "react-hot-toast"
import AddModal from "./AddModal"
import Pagination from "@/ui/Pagination"

const UsersPage = () => {
    const [page, setPage] = useState(1)
    const [sortUp, setSortUp] = useState(false)
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('user').then(res => setData(res.data))
            } catch (error: any) {
                toast.error(error.response?.data?.message || error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    const filteredData = () => {
        if (!search) return data.sort((a: any, b: any) => sortUp ? a.full_name.localeCompare(b.full_name) :
            b.full_name.localeCompare(a.full_name));
        return data.filter(f => f.full_name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a: any, b: any) => sortUp ? a.full_name.localeCompare(b.full_name) : b.full_name.localeCompare(a.full_name))
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h2 className="title">Foydalanuvchilar</h2>
                <Button color="primary" radius="sm" startContent={<Plus className="w-5" />} onClick={onOpen}>
                    Foydalanuvchi qo&apos;shish
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-6 pb-6 pt-8">
                <div className="p-6 rounded-xl w-full bg-[#ECFDF3]">
                    <p className="text-success-700 text-sm pb-2">Barcha foydalanuvchilar</p>
                    <span className="text-success-700 text-4xl font-semibold">{data.length}</span>
                </div>
                <div className="p-6 rounded-xl w-full bg-[#EFF8FF]">
                    <p className="text-[#175CD3] text-sm pb-2">Aktiv foydalanuvchilar</p>
                    <span className="text-[#175CD3] text-4xl font-semibold">{data.filter(f => f?.is_active).length}</span>
                </div>
                <div className="p-6 rounded-xl w-full bg-[#FDF2FA]">
                    <p className="text-[#C11574] text-sm pb-2">Obunasi tugagan foydalanuvchilar</p>
                    <span className="text-[#C11574] text-4xl font-semibold">{data.filter(f => f?.is_block).length}</span>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                    <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[550px]'>
                        <div className='text-gray-600 flex items-center justify-between gap-2 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                            <div className="flex items-center w-full">
                                <div className="flex items-center w-full gap-5 sm:gap-11">
                                    <p className="font-semibold text-sm text-black">Id</p>
                                    <div className="flex items-center gap-1 cursor-pointer w-max" onClick={() => setSortUp(!sortUp)}>
                                        <p className="text-sm w-full text-gray-600">To&apos;liq ismi</p>
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
                            {!loading ?
                                (data.length ? filteredData().slice(page * 6 - 6, page * 6).map(d => (
                                    <Row d={d} key={d.id} />
                                )) : <p className="text-center text-base pt-4">Foydalanuvchilar mavjud emas</p>) :
                                <div className="w-full h-[30vh] flex items-center justify-center">
                                    <Spinner size="md" />
                                </div>
                            }
                        </div>
                        {!loading && data.length > 0 && <Pagination page={page} setPage={setPage} total={filteredData().length} />}
                    </div>
                </div>
            </div>
            <AddModal isOpen={isOpen} onClose={onClose} setData={setData} />
        </div>
    )
}

export default UsersPage

