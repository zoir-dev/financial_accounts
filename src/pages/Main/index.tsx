'use client'
import { Button, ButtonGroup, Input, Spinner, useDisclosure } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Row from './Row'
import Questions from '../Home/Questions'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'
import Pagination from '@/ui/Pagination'
import { useRouter } from 'next/navigation'
import AddModal from './AddModal'

const MainPage = () => {
    const [page, setPage] = useState(1)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const [sortUp, setSortUp] = useState(true)
    const [data, setData] = useState<any[]>([])
    const [index, setIndex] = useState(-1)
    const [search, setSearch] = useState('')

    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('home/partner').then(d => setData(d.data))
            } catch (error: any) {
                if (error?.response?.data?.message === 'Topilmadi') {
                    localStorage.clear()
                    router.push('/')
                } else {
                    toast.error(error?.response?.data?.message || error?.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filteredData = () => {
        if (!search) return data.sort((a, b) => sortUp ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).slice(page * 6 - 6, page * 6)
        return data.filter(d => d.name.toLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a, b) => sortUp ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).slice(page * 6 - 6, page * 6)
    }

    return (
        <div className='pb-16'>
            <h2 className='title'>
                Asosiy sahifa
            </h2>
            <p className='text-xl py-8'>Hamkorlar soni</p>
            <div className='flex gap-12 lg:items-center justify-between pb-6 flex-col lg:flex-row'>
                <div className='flex items-center gap-8 lg:gap-4'>
                    <ButtonGroup color='primary' radius='sm'>
                        <Button className='justify-end' onClick={() => setSortUp(true)}>
                            <ArrowUp />
                        </Button>
                        <Button className='text-[#E0E0E0] text-xl' isIconOnly>
                            {data.length}
                        </Button>
                        <Button className='justify-start' onClick={() => setSortUp(false)}>
                            <ArrowUp className='rotate-180' />
                        </Button>
                    </ButtonGroup>
                    <Button color='primary' radius='sm'>
                        Saqlash
                    </Button>
                </div>
                <div className='flex items-start sm:items-center gap-8 sm:gap-4 flex-col sm:flex-row'>
                    <Button color='primary' radius='sm' startContent={<Plus className='!w-5' />} onClick={onOpen}>
                        Feedback
                    </Button>
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
                </div>
            </div>
            <div className='py-4 rounded-xl border-2 border-default-200 mb-12 w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0'>
                <div className='text-gray-600 flex items-center gap-2 pb-3 border-b-2 border-default-200 px-4 cursor-pointer  sm:px-6'
                    onClick={() => setSortUp(!sortUp)}>
                    <p>Feedback</p>
                    <ArrowUp className={`${sortUp ? 'rotate-0' : 'rotate-180'} duration-250 w-4`} />
                </div>
                <div>
                    {!loading ? filteredData()?.map(d => (
                        <Row d={d} key={d.id} setData={setData} index={index} setIndex={setIndex} onOpen={onOpen} />
                    )) : <div className='flex items-center justify-center w-full h-[40vh]'>
                        <Spinner size='md' />
                    </div>}
                </div>
                {!loading && data.length > 0 && <Pagination page={page} setPage={setPage} total={filteredData()?.length} />}
            </div>
            <Questions admin={true} />
            <AddModal isOpen={isOpen} onClose={onClose} setData={setData} data={data.find(d => d.id === index)} setIndex={setIndex} />
        </div>
    )
}

export default MainPage