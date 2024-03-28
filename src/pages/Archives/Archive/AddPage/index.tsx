'use client'
import React, { useEffect, useState } from 'react'
import Rows from '../Rows'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'
import { Spinner } from '@nextui-org/react'

const AddArchivePage = ({ slug }: { slug: string }) => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            await http.get('archive/all/' + slug).then(res => setData(res.data[0]))
            setLoading(false)
        } catch (error: any) {
            toast.error(error?.response?.data?.message || error?.message)
        }
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])
    return (
        <div className="w-full flex flex-col gap-6 pb-12">
            {loading ?
                <div className='w-full h-[70vh] flex items-center justify-center'>
                    <Spinner size='lg' />
                </div>
                :
                <Rows data={data} add={true} fetchData={fetchData} />
            }
        </div>
    )
}

export default AddArchivePage