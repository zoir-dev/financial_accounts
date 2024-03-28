import { http } from "@/utils/http";
import { Button, Spinner } from "@nextui-org/react";
import { Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Row = ({ d, setIndex, onOpen, index, setData }: thisProps) => {
    const [loading, setLoading] = useState(false)

    const deleteRow = async () => {
        try {
            setLoading(true)
            await http.delete('category/' + d.id).then(res => setData((val: any[]) => val.filter(f => f.id !== d.id)))
            toast.success("muvaffaqqiyatli o'chirildi")
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
            setIndex(-1)
        }
    }
    return (
        <div className='flex items-center justify-between px-4 sm:px-6 py-4 border-b-1 border-default-200 gap-4'>
            <p className="text-sm font-semibold">{d?.title}</p>
            <div className='flex items-center justify-end'>
                <Button isIconOnly variant='light' onClick={() => { deleteRow(), setIndex(d.id) }} >
                    {(loading && d.id === index) ? <Spinner size="sm" /> : <Trash2 className='text-primary w-5' />}
                </Button>
                <Button isIconOnly variant='light' onClick={() => { onOpen(), setIndex(d.id) }}>
                    <Edit2 className='text-gray-600 w-5' />
                </Button>
            </div>
        </div>
    )
}

export default Row

interface thisProps {
    d: any,
    setIndex: (val: number) => void,
    onOpen: () => void,
    index: number,
    setData: (val: any) => void
}

