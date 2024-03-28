import { Button, CircularProgress } from '@nextui-org/react'
import { ArrowUp, Trash2 } from 'lucide-react'
import LineChart from './Chart';
import { useState } from 'react';
import { http } from '@/utils/http';
import toast from 'react-hot-toast';

const Actions = ({ data }: { data: any }) => {
    const [loading, setLoading] = useState(false)

    const dataa = [40, 70, 60, 50, 60, 70, 80, 100];

    const deleteArchive = async () => {
        try {
            setLoading(true)
            await http.delete('archive/' + data?.id).then(res => console.log(res.data))
            toast.success("Muvaffaqiyatli o'chirildi")
        } catch (error: any) {
            toast.error(error?.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full flex gap-6 flex-col lg:flex-row'>
            <div className='rounded-xl border-2 border-default-200 w-full'>
                <div className='flex flex-col p-4 items-start gap-4 border-b-2 border-default-200'>
                    <h3 className='text-base sm:text-xl font-semibold'>{data?.organization?.name}</h3>
                    <Button radius='full' color='primary' size='lg'>{data?.ball} ball</Button>
                </div>
                <LineChart data={dataa} />
                <div className='flex gap-4 justify-end p-4 border-t-1 border-default-200'>
                    <Button variant='bordered' radius='sm'>
                        21.01.2024 yangilangan
                    </Button>
                    <Button variant='bordered' radius='sm' color='primary' endContent={<Trash2 className='w-5' />} onClick={deleteArchive} isLoading={loading}>
                        O&apos;chirish
                    </Button>
                </div>
            </div>
            <div className='w-full sm:max-w-[360px] border-2 rounded-xl border-default-200 min-h-[20vh] relative'>
                <div className='flex flex-col p-4 gap-1 border-b-1 border-default-200'>
                    <h3 className='text-base sm:text-xl font-semibold'>Reyting darajasi</h3>
                    <p className='text-[#475467] text-sm'>Siz mavjud joylarning 80% dan foydalanmoqdasiz.</p>
                </div>
                <div className='flex relative pl-20 w-full pt-20 mb-[80px]'>
                    <CircularProgress value={80} size='lg' className='scale-[4]' label={data?.reyting} classNames={{
                        label: 'absolute top-[25%] scale-[0.7] font-semibold'
                    }} />
                    <div className='bg-success-50 text-success-700 absolute top-4 right-4 py-[2px] px-2 rounded-full flex items-center gap-1'>
                        <ArrowUp className='w-3' />
                        <p className='text-sm'>45 17</p>
                    </div>
                </div>
                <div className='p-4 sm:p-6'>
                    <h3 className='text-base sm:text-lg font-semibold'>You’ve almost reached your limit</h3>
                    <p className='text-[#475467] text-sm'>You have used 80% of your available spots. Upgrade plan to monitor more vendors.</p>
                </div>
                <div className='h-[73px] border-t-1 border-default-200 absolute bottom-0 w-full'>
                </div>
            </div>
        </div>
    )
}

export default Actions