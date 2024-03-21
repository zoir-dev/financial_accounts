'use client'
import { Button, useDisclosure } from '@nextui-org/react'
import { Edit2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import RowModal from './RowModal'

const Row = ({ d }: { d: any }) => {
    const [show, setShow] = useState(false)
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <div className='py-6 sm:py-9 px-4 sm:px-6 flex items-center gap-4 border-b-2 border-default-200'>
            <div className='flex items-center gap-4 w-full'>
                <Image src={d?.img} alt='logo' className='rounded-full hidden sm:flex' width={40} height={40} />
                <div className='flex flex-col gap-4 w-full'>
                    <h4 className='text-sm font-semibold' onClick={() => setShow(!show)}>{d?.title}</h4>
                    <p className={`text-sm sm:text-base text-gray-500 ${show ? 'flex' : 'hidden'} sm:!flex`}>{d?.des}</p>
                </div>
            </div>
            <div className='flex gap-1'>
                <Button isIconOnly variant='light'>
                    <Trash2 className='text-primary w-5' />
                </Button>
                <Button isIconOnly variant='light' onClick={onOpen}>
                    <Edit2 className='text-gray-600 w-5' />
                </Button>
            </div>
            <RowModal isOpen={isOpen} onClose={onClose} data={d} />
        </div>
    )
}

export default Row