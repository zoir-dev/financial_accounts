'use client'
import { Accordion, AccordionItem, Spinner, useDisclosure } from '@nextui-org/react'
import { Edit2, MinusCircle, PlusCircle, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AddModal from './AddModal'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'

const Questions = ({ admin }: { admin?: boolean }) => {
    const [data, setData] = useState<Faq[]>([])
    const [loading, setLoading] = useState(false)
    const [deletingId, setDeletingId] = useState(-1)

    const [index, setIndex] = useState(-1)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const fetchData = async () => {
        try {
            await http.get('faq').then(d => setData(admin ? [...d.data, { id: Date.now(), action: true, question: 'Yangi savol' }] : d.data))
        } catch (error: any) {

        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const deleteFaq = async (id: number) => {
        try {
            setDeletingId(id)
            setLoading(true)
            await http.delete('faq/' + id).then(d => {
                if (d.status === 200) {
                    toast.success("Muvaffaqqiyatli o'chirildi")
                }
            })
            setLoading(false)
            setData(d => d.filter(d => d.id !== id))
            setDeletingId(-1)
        } catch (error: any) {
            toast.error(error.message)

        }
    }

    return (
        <div className='flex flex-col gap-12 sm:gap-16'>
            <div className='text-center'>
                <h2 className='text-text1 font-semibold text-3xl sm:text-4xl'>Ko&apos;p beriladigan savollar</h2>
                {!admin && <p className='text-text2 text-lg sm:text-xl pt-5'>Pudratchi tashkilotlar va o’z savolaringizga javob topasiz</p>}
            </div>
            <Accordion showDivider={admin} className={` ${admin ? 'gap-2' : 'gap-4'} flex flex-col !px-0`}
                onSelectionChange={(e: any) => {
                    setIndex(e.currentKey),
                        admin && e.currentKey == data[data.length - 1].id && onOpen()
                }}>
                {data.map(d => (
                    <AccordionItem
                        key={`${d.id}`}
                        aria-label={`${d.id}`}
                        title={d.question ?? 'Yangi savol'}
                        classNames={{
                            content: 'text-text2',
                            title: "text-text1"
                        }}
                        indicator={({ isOpen }) => (!isOpen ?
                            <PlusCircle className='text-primary' /> :
                            d.action ?
                                <PlusCircle className='text-primary' /> :
                                <MinusCircle className='rotate-90 text-primary opacity-50' />
                        )}
                    >
                        <div className='flex justify-between gap-6'>
                            <p>
                                {d.answer}
                            </p>
                            {admin && !d.action && <div className='flex flex-col gap-6'>
                                <Edit2 className='text-primary cursor-pointer' onClick={onOpen} />
                                {loading && deletingId === d.id ? <Spinner color='primary' size='sm' className='w-max' /> : <Trash2 className='text-primary cursor-pointer' onClick={() => deleteFaq(d.id)} />}
                            </div>}
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
            <AddModal isOpen={isOpen} onClose={onClose} data={index && data.find(f => f.id === +index)} setData={setData} />
        </div >
    )
}

export default Questions

interface Faq {
    id: number,
    question: string,
    answer: string,
    action?: boolean
}
