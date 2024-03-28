'use client'
import { http } from '@/utils/http'
import { Button, Input, Select, SelectItem, Spinner } from '@nextui-org/react'
import { ArrowUp, Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Row from './Row'
import toast from 'react-hot-toast'
import Pagination from '@/ui/Pagination'

const ArchivesPage = () => {
    const [regions, setRegions] = useState<{ id: number, name: string, organizations: any[] }[]>([])
    const [search, setSearch] = useState({ region: -1, stir: '', name: '' })
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any[]>([])
    const [sortUp, setSortUp] = useState(false)
    const [page, setPage] = useState(1)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                await http.get('region').then(res => setRegions(res.data))
                await http.get('archive/all').then(res => setData(res.data))
            } catch (error: any) {
                toast.error(error?.response?.data?.message || error?.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const filteredData = () => {
        return data.filter(item => {
            if (search.region !== -1 && item?.organization?.region?.id !== search.region) {
                return false;
            }
            if (search.stir && !item?.stir?.toString().includes(search.stir)) {
                return false;
            }
            if (search.name && !item?.name?.toLowerCase().includes(search.name.toLowerCase())) {
                return false;
            }
            return true;
        }).sort((a: any, b: any) => sortUp ? a?.organization?.name.localeCompare(b?.organization?.name)
            : b?.organization?.name.localeCompare(a?.organization?.name));
    };

    return (
        <div>
            <h2 className="title">Arxivlar</h2>
            <div className='flex flex-col sm:flex-col-reverse gap-8 py-8'>
                <div className="p-6 rounded-xl sm:w-max bg-[#ECFDF3]">
                    <p className="text-success-700 text-sm pb-2">Barcha arxivlar</p>
                    <span className="text-success-700 text-4xl font-semibold">{data?.length}</span>
                </div>
                <div className='flex items-center flex-col sm:flex-row justify-center gap-2 sm:gap-4 sm:pt-4'>
                    <Select
                        variant='bordered'
                        color='primary'
                        className='w-full sm:max-w-[320px]'
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
                        className='w-full sm:max-w-[320px]'
                        onChange={(e) => setSearch({ ...search, stir: e.target.value })}
                    />
                    <Input
                        variant='bordered' color='primary' radius='sm' placeholder='Nomi'
                        classNames={{
                            input: 'text-base'
                        }}
                        startContent={<Search className='text-gray-500 w-5' />}
                        className='w-full sm:max-w-[320px]'
                        onChange={(e) => setSearch({ ...search, name: e.target.value })}
                    />
                </div>
            </div>
            <div className="overflow-x-auto w-[calc(100%+32px)] -ml-4 sm:w-full sm:!ml-0">
                <div className='py-4 rounded-xl border-2 border-default-200 mb-12 min-w-[550px]'>
                    <div className='text-gray-600 flex items-center justify-between gap-4 pb-3 border-b-2 border-default-200 px-4 sm:px-6 select-none'>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 cursor-pointer w-max" onClick={() => setSortUp(!sortUp)}>
                                <p className="text-sm">Nomi</p>
                                <ArrowUp className={`w-4 text-gray-600 duration-250 ${!sortUp && 'rotate-180'}`} />
                            </div>
                        </div>
                        <div className="text-center w-full flex items-center justify-between gap-4">
                            <p className="text-sm">Viloyat</p>
                            <p className="text-sm text-gray-600">Reyting</p>
                        </div>
                    </div>
                    <div>
                        {!loading ?
                            (data.length ? filteredData().slice(page * 6 - 6, page * 6).map(d => (
                                <Row d={d} key={d.id} />
                            )) : <p className="text-center text-base pt-4">Arxivlar mavjud emas</p>) :
                            <div className="w-full h-[30vh] flex items-center justify-center">
                                <Spinner size="md" />
                            </div>
                        }
                    </div>
                    {!loading && data.length > 0 && <Pagination page={page} setPage={setPage} total={filteredData().length} />}
                </div>
            </div>
        </div>
    )
}

export default ArchivesPage
