import React, { useState } from 'react'
import Row from './Row'
import { Button } from '@nextui-org/react'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'

const Rows = ({ data, add, fetchData }: { data: any, add?: boolean, fetchData?: () => void }) => {
    const [loading, setLoading] = useState({ val: false, save: false })

    const save = async (val: boolean) => {
        setLoading({ val: true, save: val })
        try {
            await http.post('archive/save/' + data?.id, { 'save': val })
            toast.success(`Muvaffaqiyatli ${val ? 'saqlandi' : 'bekor qilindi'}`)
        } catch (error: any) {
            toast.error(error?.response?.data?.message || error?.message)
        } finally {
            setLoading({ val: false, save: false })
        }
    }
    return (
        <div className="w-full flex flex-col gap-6">
            <Row
                add={add}
                info={data?.bandlik}
                data={data?.bandlik_mehnat}
                type="bandlik"
                size="md"
                name="Bandlik"
                url1='bandlik/bandlik-mehnat'
                url2='bandlik'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} data={data?.soliq_mehnat} name="Soliq mehnat"
                url1='soliq'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} info={data?.ypx} data={data?.ypx_mehnat} type="ypx" size="4xl" name="Ypx"
                url1='ypx/ypx-mehnat'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} data={data?.uzStandart} name="UzStandart"
                url1='uz-standart'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} info={data?.sanoat} data={data?.sanoat_mehnat} type="sanoat" size="4xl" name="Sanoat"
                url1='sanoat/mehnat'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} info={data?.agroinspeksiya}
                data={data?.agroinspeksiya_mehnat} type='agroinspeksiya' size="3xl" name="Agroinspeksiya"
                url1='agroinspeksiya/agroinspeksiya-mehnat'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} data={data?.inspeksya_ypx} name="Inspeksiya Ypx"
                url1='inspeksya-ypx'
                id={data?.id}
                fetchData={fetchData}
            />
            <Row
                add={add} info={data?.mcuz} data={data?.mcuz_mehnat} type="mcuz" size="md" name="Mcuz"
                url1='mcuz/mehnat'
                id={data?.id}
                fetchData={fetchData}
            />
            <div className='flex justify-end gap-4'>
                <Button variant='bordered' radius='sm' onClick={() => save(false)} isLoading={loading.val && !loading.save} isDisabled={loading.val}>
                    Bekor qilish
                </Button>
                <Button variant='bordered' color='primary' radius='sm' onClick={() => save(true)} isLoading={loading.val && loading.save} isDisabled={loading.val}>
                    Saqlash
                </Button>
            </div>
        </div>
    )
}

export default Rows