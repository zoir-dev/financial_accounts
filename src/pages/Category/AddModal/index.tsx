import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const AddModal = ({ isOpen, onClose, data, setData, setIndex }: thisProps) => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ title: string }>()


    const onSubmit = async (form: any) => {
        try {
            setLoading(true)
            if (data) {
                await http.put('category/' + data.id, form).then(res => setData((val: any[]) => [res.data, ...val.filter(f => f.id !== data.id)]))
                toast.success("Muvaffaqqiyatli tahrirlandi")
            } else {
                await http.post('category', form).then(res => setData((val: any[]) => [res.data, ...val]))
                toast.success("Muvaffaqqiyatli qo'shildi")
            }
            setLoading(false)
            onClose()
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
            setIndex(-1)
        }

    }
    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(), reset() }} isDismissable={false} size='lg' backdrop='blur'
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
                <ModalHeader>Kategoriya {data ? 'tahrirlash' : "qo'shish"}</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder="Kategoriya nomi"
                            label="Kategoriya nomi"
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('title', { required: "Nom kiriting" })}
                            isInvalid={!!errors.title}
                            errorMessage={errors.title && errors.title?.message}
                            defaultValue={data?.title}
                            isDisabled={loading}
                        />
                        <div className='flex gap-3 pt-5'>
                            <Button variant='bordered' radius='sm' onClick={() => { onClose(), reset() }} isDisabled={loading} fullWidth>
                                Bekor qilish
                            </Button>
                            <Button color='primary' radius='sm' type='submit' isLoading={loading} fullWidth>Saqlash</Button>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AddModal

interface thisProps { isOpen: boolean, onClose: () => void, data: any, setData: (val: any) => void, setIndex: (val: number) => void }