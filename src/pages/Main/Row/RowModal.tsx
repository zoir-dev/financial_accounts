import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea } from '@nextui-org/react'
import { CloudUpload, ImagePlus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const RowModal = ({ isOpen, onClose, data, setData, setIndex }: { isOpen: boolean, onClose: () => void, data?: any, setData: (val: any) => void, setIndex: (val: number) => void }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<{ logo: any, name: string, thought: string }>()
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState<any>(null)



    const onSubmit = async (form: { name: string, thought: string }) => {
        if (data?.logo_url || img) {
            const formData = new FormData();
            formData.append('name', form.name)
            formData.append('logo', img)
            formData.append('thought', form.thought)
            try {
                setLoading(true)
                if (data?.name) {
                    console.log(formData)
                    await http.put('home/partner/' + data.id, img ? formData : form)
                        .then(res => setData((d: any[]) => [res.data, ...d.filter(f => f.id !== data.id)]))
                    toast.success('Muvaffaqqiyatli tahrirlandi')
                } else {
                    await http.post('home/partner', formData).then(res => setData((d: any[]) => [res.data, ...d]))
                    toast.success("Muvaffaqqiyatli qo'shildi")
                }
                setLoading(false)
                setIndex(-1)
                onClose()
                setImg(null)
            } catch (error: any) {
                toast.error(error.response?.data?.message)
                setLoading(false)
            }
        }
    }


    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(), reset(), setIndex(-1), setLoading(false), setImg(null) }} isDismissable={false} size='2xl' backdrop='blur'
            className='pb-5'
            placement='center'
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                }
            }}>
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <div>
                            <div className='flex items-center gap-3'>
                                {(img || data?.logo_url) ?
                                    <Image
                                        src={img !== null ? URL.createObjectURL(img) : data?.logo_url}
                                        alt='logo' width={64} height={64}
                                        className='rounded-full w-16 h-16 object-cover'
                                    /> :
                                    <div className='rounded-full w-16 h-16 bg-gray-100 flex items-center justify-center'>
                                        <ImagePlus className='w-6 text-gray-600' />
                                    </div>}
                                <label htmlFor="upload_img"
                                    className='flex items-center gap-3 rounded-lg cursor-pointer border-2 py-[10px] px-4 border-default-200'>
                                    <CloudUpload className='w-5' />
                                    <p>
                                        Rasm yuklash
                                    </p>
                                </label>
                                <input id='upload_img' hidden accept='image/*' type='file'
                                    onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
                                />
                            </div>
                        </div>
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder='Kompaniya'
                            label='Kompaniya'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('name', { required: "Kompaniya nomini kiriting" })}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name && errors.name?.message}
                            defaultValue={data?.name}
                            isDisabled={loading}
                        />
                        <Textarea
                            radius='sm'
                            variant='bordered'
                            placeholder="Fikr"
                            label='Fikr'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('thought', { required: 'Fikr kiriting' })}
                            isInvalid={!!errors.thought}
                            errorMessage={errors.thought && errors.thought?.message}
                            defaultValue={data?.thought}
                            isDisabled={loading}
                        />
                        <div className='flex gap-3'>
                            <Button variant='bordered' radius='sm' onClick={() => { onClose(), reset(), setIndex(-1), setLoading(false), setImg(null) }} isDisabled={loading}>
                                Bekor qilish
                            </Button>
                            <Button color='primary' radius='sm' type='submit' isLoading={loading}>Saqlash</Button>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RowModal