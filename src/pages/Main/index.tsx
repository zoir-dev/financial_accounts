'use client'
import { Button, ButtonGroup, Input, Spinner, useDisclosure } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Row from './Row'
import Questions from '../Home/Questions'
import RowModal from './Row/RowModal'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'
import Pagination from '@/ui/Pagination'

const MainPage = () => {
    const [page, setPage] = useState(1)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const [sortUp, setSortUp] = useState(true)
    const [data, setData] = useState<any[]>([])
    const [index, setIndex] = useState(-1)
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('home/partner').then(d => setData(d.data))
            } catch (error: any) {
                toast.error(error.response.data.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const filteredData = () => {
        if (!search) return data
        return data.filter(d => d.name.toLowerCase().includes(search.toLocaleLowerCase()))
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
                <div className='text-gray-600 flex items-center gap-2 pb-3 border-b-2 border-default-200 px-4  sm:px-6'>
                    <p>Feedback</p>
                    <ArrowUp className='rotate-180 w-4' />
                </div>
                <div>
                    {!loading ? filteredData()?.sort((a, b) => sortUp ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).slice(page * 6 - 6, page * 6).map(d => (
                        <Row d={d} key={d.id} setData={setData} index={index} setIndex={setIndex} onOpen={onOpen} />
                    )) : <div className='flex items-center justify-center w-full h-[40vh]'>
                        <Spinner size='md' />
                    </div>}
                </div>
                {!loading && <Pagination page={page} setPage={setPage} total={filteredData().length} />}
            </div>
            <Questions admin={true} />
            <RowModal isOpen={isOpen} onClose={onClose} setData={setData} data={data.find(d => d.id === index)} setIndex={setIndex} />
        </div>
    )
}

export default MainPage


const dataa = [
    {
        id: 1,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi1",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.1"
    },
    {
        id: 2,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi2",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.2"
    },
    {
        id: 3,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi3",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.3"
    },
    {
        id: 4,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi4",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.4"
    },
    {
        id: 5,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi5",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.5"
    },
    {
        id: 6,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi6",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.5"
    },
    {
        id: 7,
        log_url: 'https://picsum.photos/40',
        name: "Turon qurilish kompaniyasi7",
        thought: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.5"
    },
]