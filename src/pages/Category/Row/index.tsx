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
        <div className='flex items-center justify-between px-4 sm:px-6 py-4 border-b-2 border-default-200'>
            <p className="text-sm w-1/4">{d?.title}</p>
            <p className='w-1/4 text-center'>{d?.ball}</p>
            <div className="w-1/4 flex justify-center">
                {getRating(d?.id)}
            </div>
            <div className='flex items-center justify-end w-1/4'>
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


function getRating(id: number) {
    switch (id % 6) {
        case 5:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success`}>AAA</p>;
        case 4:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success bg-opacity-70`}>AA</p>;
        case 3:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success bg-opacity-50`}>A</p>;
        case 2:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary`}>BBB</p>;
        case 1:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary bg-opacity-70`}>BB</p>;
        case 0:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary bg-opacity-50`}>B</p>;
    }

}