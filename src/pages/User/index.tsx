'use client'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { Button, Input, Select, SelectItem, Spinner, useDisclosure } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import Row from './Row'
import AddModal from './AddModal'
import { http } from '@/utils/http'
import Pagination from '@/ui/Pagination'

const UserPage = () => {
    const [page, setPage] = useState(1)
    const [sortUp, setSortUp] = useState(false)
    const [index, setIndex] = useState(-1)
    const [search, setSearch] = useState({ region: -1, stir: '', name: '' })
    const [regions, setRegions] = useState<{ id: number, name: string, organizations: any[] }[]>([])
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const { isOpen, onClose, onOpen } = useDisclosure()

    const fetchData = async () => {
        try {
            setLoading(true)
            await http.get('organization').then(res => setData(res.data))
            await http.get('region').then(res => setRegions(res.data))
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const filteredData = () => {
        return data.filter(item => {
            if (search.region !== -1 && item?.region?.id !== search.region) {
                return false;
            }
            if (search.stir && !item?.stir?.toString().includes(search.stir)) {
                return false;
            }
            if (search.name && !item?.name?.toLowerCase().includes(search.name.toLowerCase())) {
                return false;
            }
            return true;
        });
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex gap-4 lg:items-center justify-between flex-col lg:flex-row'>
                <h2 className="title">
                    Tashkilot
                </h2>
                <div className='flex items-start sm:items-center flex-col-reverse sm:flex-row gap-6 sm:gap-4'>
                    <Select
                        variant='bordered'
                        color='primary'
                        className='w-[180px] hidden md:flex'
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
                        className='w-full sm:w-[180px] hidden md:flex'
                        onChange={(e) => setSearch({ ...search, stir: e.target.value })}
                    />
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Nomi'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:w-[180px]'
                        onChange={(e) => setSearch({ ...search, name: e.target.value })}
                    />
                    <Button color='primary' radius='sm' startContent={<Plus />} onClick={onOpen}>
                        Tashkilot q&apos;shish
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[500px]'>
                    <div className='text-gray-600 flex items-center justify-between gap-2 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                        <div className="flex items-center w-1/2 sm:w-full">
                            <p className="text-sm">Nomi</p>
                        </div>
                        <div className="text-center w-full flex items-center">
                            <div className="flex items-center gap-1 cursor-pointer w-max" onClick={() => setSortUp(!sortUp)}>
                                <p className="text-sm text-gray-600">Ball</p>
                                <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                            </div>
                            <div className="w-full">
                                <p></p>
                                <p className="text-sm text-gray-600">Reyting</p>
                                <p className="text-sm text-gray-600 w-max"></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {!loading ?
                            (data.length ? filteredData().map(d => (
                                <Row d={d} key={d.id} index={index} setIndex={setIndex} onOpen={onOpen} setData={setData} />
                            )) : <p className="text-center text-base pt-4">Foydalanuvchilar mavjud emas</p>) :
                            <div className="w-full h-[30vh] flex items-center justify-center">
                                <Spinner size="md" />
                            </div>
                        }
                    </div>
                    {!loading && <Pagination page={page} setPage={setPage} total={filteredData().length} />}
                </div>
            </div>
            <AddModal isOpen={isOpen} onClose={onClose} data={data.find(f => f.id === index)} regions={regions} setIndex={setIndex} fetchData={fetchData} />
        </div>
    )
}

export default UserPage
