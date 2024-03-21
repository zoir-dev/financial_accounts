'use client'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Plus, Search } from 'lucide-react'
import React from 'react'

const ArchivePage = () => {
    return (
        <div>
            <div className='flex items-start sm:items-center justify-between flex-col gap-4 sm:flex-row'>
                <h2 className="title">Arxivlar</h2>
                <Button color='primary' radius='sm' startContent={<Plus className='!w-5' />} >
                    Arxiv qo&apos;shish
                </Button>
            </div>
            <div className='flex flex-col sm:flex-col-reverse gap-8 py-8'>
                <div className="p-6 rounded-xl w-max bg-[#ECFDF3]">
                    <p className="text-success-700 text-sm pb-2">Barcha arxivlar</p>
                    <span className="text-success-700 text-4xl font-semibold">125</span>
                </div>
                <div className='flex items-center flex-col sm:flex-row justify-center gap-2 sm:gap-4 sm:pt-4'>
                    <Select variant='bordered' color='primary' className='w-full sm:max-w-[320px]' placeholder='Viloyat' radius='sm' classNames={{ value: 'text-base' }} startContent={<Search className='text-gray-500 w-5' />}>
                        <SelectItem key='1' value='1'>
                            1
                        </SelectItem>
                        <SelectItem key='2' value='2'>
                            2
                        </SelectItem>
                        <SelectItem key='3' value='3'>
                            3
                        </SelectItem>
                    </Select>
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='STIR'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-full sm:max-w-[320px]'
                    />
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Nomi'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-full sm:max-w-[320px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default ArchivePage