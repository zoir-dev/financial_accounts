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
        <div className='flex items-center justify-between gap-2 px-4 sm:px-6 py-4 border-b-2 border-default-200'>
            <div className="flex items-center w-1/2 sm:w-full">
                <p className="text-sm">{d?.name}</p>
            </div>
            <div className="text-center w-full flex items-center">
                <p className='min-w-8'>{d?.ball}</p>
                <div className="w-full flex items-center gap-2">
                    <p className='w-full'></p>
                    {getRating(d?.id)}
                    <div className='flex items-center justify-end w-full'>
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


function getRating(id: number) {
    switch (id % 6) {
        case 5:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-success`}>AAA</p>;
        case 4:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-success bg-opacity-70`}>AA</p>;
        case 3:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-success bg-opacity-50`}>A</p>;
        case 2:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-secondary`}>BBB</p>;
        case 1:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-secondary bg-opacity-70`}>BB</p>;
        case 0:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max text-left bg-secondary bg-opacity-50`}>B</p>;
    }
}