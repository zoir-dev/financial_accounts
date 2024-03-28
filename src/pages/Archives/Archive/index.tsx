'use client'

import { http } from "@/utils/http"
import { Button, Spinner } from "@nextui-org/react"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Actions from "./Actions"
import Link from "next/link"
import Rows from "./Rows"

const ArchivePage = ({ slug }: { slug: string }) => {
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
        <>
            {loading ? <div className="flex items-center justify-center min-h-[80vh]"><Spinner color="primary" size="lg" /></div> :
                (data?.organization ? <div className="h-full flex flex-col gap-8">
                    <div className="flex items-center w-full justify-between flex-wrap gap-4 sm:gap-6 pb-12">
                        <h2 className="title">{data?.organization?.name}</h2>
                        <Link href={'/archives/' + slug + '/add'}>
                            <Button color="primary" radius="sm" startContent={<Plus width={20} />}>Arxiv qo&apos;shish</Button>
                        </Link>
                        <Actions data={data} />
                        <Rows data={data} />
                    </div>
                </div> :
                    <div className="flex justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold">Arxiv mavjud emas</h3>
                        <Link href={'/archives/' + slug + '/add'}>
                            <Button color="primary" radius="sm" startContent={<Plus width={20} />}>Arxiv qo&apos;shish</Button>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default ArchivePage