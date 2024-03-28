import { http } from '@/utils/http'
import { Button, Spinner } from '@nextui-org/react'
import { Edit2, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Row = ({ d, index, setIndex, onOpen, setData }: { d: any, index: number, setIndex: (val: number) => void, onOpen: () => void, setData: (val: any) => void }) => {
    const [loading, setLoading] = useState(false)

    const deleteRow = async () => {
        setIndex(d?.id)
        try {
            setLoading(true)
            await http.delete('organization/' + d.id).then(() => setData((val: any[]) => val.filter(f => f.id !== d.id)))
            setLoading(false)
            setIndex(-1)
        } catch (error: any) {
            toast.error(error.response.data.message)
            setIndex(-1)
            setLoading(false)
        }
    }
    return (
        <div className='flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b-2 border-default-200'>
            <div className="flex items-center w-1/2 sm:w-full">
                <p className="text-sm font-semibold">{d?.name}</p>
            </div>
            <div className="text-center w-full flex items-center gap-4">
                <p className='min-w-8 text-left text-[13px] text-gray-600'>{d?.category?.title}</p>
                <div className="w-full flex items-center gap-4">
                    <p className='w-full'></p>
                    <p className='text-[13px] -ml-4 text-gray-600'>{d?.region?.name}</p>
                    <div className='flex items-center justify-end w-full -mr-2'>
                        <Button isIconOnly variant='light' onClick={() => { setIndex(d?.id), deleteRow() }}>
                            {(loading && d.id === index) ? <Spinner size='sm' /> : <Trash2 className='text-primary w-5' />}
                        </Button>
                        <Button isIconOnly variant='light' onClick={() => { setIndex(d?.id), onOpen() }}>
                            <Edit2 className='text-gray-600 w-5' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row