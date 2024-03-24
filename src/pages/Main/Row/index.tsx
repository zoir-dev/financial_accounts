'use client'
import { http } from '@/utils/http'
import { Button, Spinner } from '@nextui-org/react'
import { Edit2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Row = ({ d, setData, index, setIndex, onOpen }: { d: any, setData: (val: any) => void, index: number, setIndex: (val: number) => void, onOpen: () => void }) => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteRow = async () => {
        setIndex(d?.id)
        try {
            setLoading(true)
            await http.delete('home/partner/' + d.id).then(() => setData((val: any[]) => val.filter(f => f.id !== d.id)))
            setLoading(false)
            setIndex(-1)
        } catch (error: any) {
            toast.error(error.response.data.message)
            setIndex(-1)
            setLoading(false)
        }
    }

    return (
        <div className='py-6 sm:py-9 px-4 sm:px-6 flex items-center gap-4 border-b-2 border-default-200'>
            <div className='flex items-center gap-4 w-full'>
                <Image src={d?.logo_url} alt='logo' className='rounded-full object-cover hidden sm:flex' loading='lazy' width={40} height={40} />
                <div className='flex flex-col gap-4 w-full'>
                    <h4 className='text-sm font-semibold' onClick={() => setShow(!show)}>{d?.name}</h4>
                    <p className={`text-sm sm:text-base text-gray-500 ${show ? 'flex' : 'hidden'} sm:!flex`}>{d?.thought}</p>
                </div>
            </div>
            <div className='flex gap-1'>
                <Button isIconOnly variant='light' onClick={deleteRow}>
                    {(loading && d.id === index) ? <Spinner size='sm' /> : <Trash2 className='text-primary w-5' />}
                </Button>
                <Button isIconOnly variant='light' onClick={() => { onOpen(), setIndex(d?.id) }}>
                    <Edit2 className='text-gray-600 w-5' />
                </Button>
            </div>
        </div >
    )
}

export default Row