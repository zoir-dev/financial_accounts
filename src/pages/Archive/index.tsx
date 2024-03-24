'use client'
import { http } from '@/utils/http'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ArchivePage = () => {
    const [regions, setRegions] = useState<{ id: number, name: string, organizations: any[] }[]>([])
    const [search, setSearch] = useState({ region: -1, stir: '', name: '' })
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('region').then(res => setRegions(res.data))
                await http.get('archive/1').then(res => console.log(res.data))
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    // const filteredData = () => {
    //     return data.filter(item => {
    //         if (search.region !== -1 && item?.region?.id !== search.region) {
    //             return false;
    //         }
    //         if (search.stir && !item?.stir?.toString().includes(search.stir)) {
    //             return false;
    //         }
    //         if (search.name && !item?.name?.toLowerCase().includes(search.name.toLowerCase())) {
    //             return false;
    //         }
    //         return true;
    //     });
    // };

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
                    <Select
                        variant='bordered'
                        color='primary'
                        className='w-full max-w-[320px]'
                        placeholder='Viloyat' radius='sm'
                        classNames={{ value: 'text-base' }}
                        aria-label='region select'
                        startContent={<Search className='text-gray-500 w-5' />}
                        onSelectionChange={(e: any) => setSearch({ ...search, region: +e.currentKey || -1 })}
                    >
                        {regions.map(r => (
                            <SelectItem key={r.id} value={r.id}>
                                {r.name}
                            </SelectItem>
                        ))}

                    </Select>
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='STIR'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full max-w-[320px]'
                        onChange={(e) => setSearch({ ...search, stir: e.target.value })}
                    />
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Nomi'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full max-w-[320px]'
                        onChange={(e) => setSearch({ ...search, name: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default ArchivePage