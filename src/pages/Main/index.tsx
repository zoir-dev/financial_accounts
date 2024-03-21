'use client'
import { Button, ButtonGroup, Input, useDisclosure } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Row from './Row'
import Questions from '../Home/Questions'
import RowModal from './Row/RowModal'
import { http } from '@/utils/http'

const MainPage = () => {
    const [page, setPage] = useState(1)
    const { isOpen, onClose, onOpen } = useDisclosure()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchData = () => {
    //         try {
    //             http.get('organization').then(d => console.log(d.data))
    //         } catch (error: any) {
    //             console.log(error.response.data.message)

    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <div className='pb-16'>
            <h2 className='title'>
                Asosiy sahifa
            </h2>
            <p className='text-xl py-8'>Hamkorlar soni</p>
            <div className='flex gap-12 lg:items-center justify-between pb-6 flex-col lg:flex-row'>
                <div className='flex items-center gap-8 lg:gap-4'>
                    <ButtonGroup color='primary' radius='sm'>
                        <Button className='justify-end'>
                            <ArrowUp />
                        </Button>
                        <Button className='text-[#E0E0E0] text-xl' isIconOnly>
                            00
                        </Button>
                        <Button className='justify-start'>
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
                    />
                </div>
            </div>
            <div className='py-4 rounded-xl border-2 border-default-200 mb-12 w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0'>
                <div className='text-gray-600 flex items-center gap-2 pb-3 border-b-2 border-default-200 px-4  sm:px-6'>
                    <p>Feedback</p>
                    <ArrowUp className='rotate-180 w-4' />
                </div>
                <div>
                    {data.map(d => (
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
            <Questions admin={true} />
            <RowModal isOpen={isOpen} onClose={onClose} />
        </div>
    )
}

export default MainPage


const data = [
    {
        id: 1,
        img: 'https://picsum.photos/40',
        title: "Turon qurilish kompaniyasi",
        des: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.1"
    },
    {
        id: 2,
        img: 'https://picsum.photos/40',
        title: "Turon qurilish kompaniyasi",
        des: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.2"
    },
    {
        id: 3,
        img: 'https://picsum.photos/40',
        title: "Turon qurilish kompaniyasi",
        des: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.3"
    },
    {
        id: 4,
        img: 'https://picsum.photos/40',
        title: "Turon qurilish kompaniyasi",
        des: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.4"
    },
    {
        id: 5,
        img: 'https://picsum.photos/40',
        title: "Turon qurilish kompaniyasi",
        des: "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.5"
    },
]