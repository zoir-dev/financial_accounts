'use client'
import { Button, Spinner, useDisclosure } from '@nextui-org/react'
import { ArrowUp, Edit2, PlusCircle, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import ControlInfo from './ControlInfo'
import AddModal from './AddModal'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'
import InfoAddModal from './InfoAddModal'

const Row = ({ data, info, type, size, name, add, url1, url2, id, fetchData = () => { } }: thisProps) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [open, setOpen] = useState(false)
    const [openWork, setOpenWork] = useState(false)
    const [editWork, setEditWork] = useState(false)
    const [sortUp, setSortUp] = useState(false)
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(-1)

    const OnOpen = () => {
        setOpen(true)
    }
    const OnClose = () => {
        setOpen(false)
    }
    const OnOpen2 = () => {
        setOpenWork(true)
    }
    const OnClose2 = () => {
        setOpenWork(false)
    }
    const editInfo = () => {
        setOpenWork(true)
        setEditWork(true)
    }

    const deleteRow = async (id: number) => {
        setIndex(id)
        try {
            setLoading(true)
            await http.delete(url1 + '/' + id)
            fetchData()
            toast.success("Muvaffaqiyatli o'chirildi")
        } catch (error: any) {
            toast.error(error?.response?.data?.message || error?.message)
        } finally {
            setLoading(false)
            setIndex(-1)
        }
    }



    const filteredData = () => {
        if (data) return data?.sort((a: any, b: any) => !sortUp ? a?.name?.localeCompare(b?.name) :
            b?.name?.localeCompare(a?.name))
        return []
    }
    return (
        <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 md:w-full md:!ml-0">
            <div className={`py-4 rounded-xl border-2 border-default-200 ${add ? 'min-w-[600px]' : 'min-w-[500px]'}`}>
                <div className='flex items-center gap-4 px-4 sm:px-6 pb-6 border-b-1 border-default-200'>
                    <h3 className='text-lg font-semibold' >{name}</h3>
                    <span className='py-[2px] px-2 rounded-full text-secondary-700 bg-secondary-50 text-xs'>{data?.length || 0} ta ma&apos;lumot</span>
                </div>
                {info && <div className='px-4 flex items-center gap-2 sm:px-6 border-b-1 border-default-200 py-3'>
                    <Button variant='bordered' radius='sm' onClick={onOpen}>Vazirlik bo&apos;yicha kelgan ma&apos;lumotlar</Button>
                    {add && <Button
                        variant='light'
                        isIconOnly
                        startContent={<PlusCircle width={20} className='text-primary' />}
                        onClick={OnOpen2}
                    />
                    }
                </div>}
                <div className='text-gray-600 py-3 flex items-center justify-between gap-2 pb-3 border-b-1 border-default-200 px-4 sm:px-6 select-none'>
                    <div className="flex items-center w-full">
                        <div className="flex items-center gap-1 w-full cursor-pointer" onClick={() => setSortUp(!sortUp)}>
                            <p className="text-sm text-gray-600">Nomi</p>
                            <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                        </div>
                        <div className='text-sm w-full text-gray-600 flex items-center justify-between gap-2'>
                            <p className='w-full'>Qiymati</p>
                            <p className='w-full text-center'>Ball</p>
                            <p className='w-full text-right'>Maksimal ball</p>
                            {add && <p className='w-full'></p>}
                        </div>
                    </div>
                </div>
                <div className='px-4 sm:px-6'>
                    {filteredData()?.map((d: any) => (
                        <div className="flex items-center gap-2 w-full py-4" key={d?.id}>
                            <div className='flex flex-col w-full'>
                                <p className="text-sm font-semibold text-gray-900 w-[90%]">{d?.name}</p>
                                <p className='text-gray-600'>{ }</p>
                            </div>
                            <div className='text-sm w-full text-gray-600 flex items-center justify-between'>
                                <p className='w-full'>{d?.value}</p>
                                <p className='w-full text-center'>{d?.ball}</p>
                                <div className='w-full flex justify-end'>
                                    <p className='bg-[#EAECF0] rounded-full py-[2px] px-2'>{d?.max_ball}</p>
                                </div>
                                {add && <div className='flex items-center w-full justify-end pl-6'>
                                    <Button isIconOnly variant='light' onClick={() => deleteRow(d?.id)} isDisabled={loading} >
                                        {(loading && d.id === index) ? <Spinner size="sm" /> : <Trash2 className='text-primary w-5' />}
                                    </Button>
                                    <Button isIconOnly variant='light' onClick={() => { OnOpen(), setIndex(d.id) }} isDisabled={loading}>
                                        <Edit2 className='text-gray-600 w-5' />
                                    </Button>
                                </div>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pt-3 border-t-1 border-default-200'>
                    {add && <Button variant='bordered' radius='sm' color='primary' startContent={<PlusCircle width={20} />} onClick={OnOpen}>Ma&apos;lumot qo&apos;shish</Button>}
                </div>
            </div>
            <ControlInfo isOpen={isOpen} onClose={onClose} info={info} type={type} size={size} OnOpen2={editInfo}
            />
            <AddModal
                isOpen={open}
                onClose={OnClose}
                url={url1}
                id={id}
                data={data?.find((d: any) => d.id === index)}
                fetchData={fetchData}
                setIndex={setIndex}
            />
            <InfoAddModal isOpen={openWork} onClose={OnClose2} type={type} data={editWork && data?.find((d: any) => d.id === index)} />
        </div>
    )
}

export default Row

interface thisProps {
    data: any,
    info?: any,
    type?: string,
    size?: string,
    name: string,
    add?: boolean,
    url1?: string,
    url2?: string,
    id: number,
    fetchData?: () => void
}