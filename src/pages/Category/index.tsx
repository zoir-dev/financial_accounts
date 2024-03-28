'use client'
import { Button, Input, Spinner, useDisclosure } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Row from './Row'
import AddModal from './AddModal'
import Pagination from '@/ui/Pagination'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'

const CategoryPage = () => {
    const [sortUp, setSortUp] = useState(false)
    const [page, setPage] = useState(1)
    const [index, setIndex] = useState(-1)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [data, setData] = useState<{ id: number, title: string }[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('category').then(res => setData(res.data))
            } catch (error: any) {
                toast.error(error?.response?.data?.message || error?.message)
            } finally { setLoading(false) }
        }
        fetchData()
    }, [])

    const filteredData = () => {
        if (!search) return data.sort((a: any, b: any) => sortUp ?
            a?.title?.localeCompare(b?.title) : b?.title?.localeCompare(a?.title))

        return data.filter(f => f.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a: any, b: any) => sortUp ? a?.title?.localeCompare(b?.title) :
                b?.title?.localeCompare(a?.title))
    }
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button color='primary' radius='sm' startContent={<Plus className='!w-5' />} onClick={onOpen} >
                        Kategoriya qo&apos;shish
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[400px]'>
                    <div className='text-gray-600 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setSortUp(!sortUp)}>
                            <p className="text-sm text-gray-600">Nomi</p>
                            <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                        </div>
                    </div>
                    <div>
                        {!loading ?
                            (data.length ? filteredData()?.slice(page * 6 - 6, page * 6).map(d => (
                                <Row d={d} key={d.id} setIndex={setIndex} onOpen={onOpen} index={index} setData={setData} />
                            )) : <p className="text-center text-base pt-4">Kategoriyalar mavjud emas</p>) :
                            <div className="w-full h-[30vh] flex items-center justify-center">
                                <Spinner size="md" />
                            </div>
                        }
                    </div>
                    {!loading && data.length > 0 && <Pagination page={page} setPage={setPage} total={filteredData()?.length} />}
                </div>
            </div>
            <AddModal isOpen={isOpen} setIndex={setIndex} onClose={onClose} data={index >= 0 && data.find(f => f.id === index)} setData={setData} />
        </div>
    )
}

export default CategoryPage
