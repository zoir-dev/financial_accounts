import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const AddModal = ({ isOpen, onClose, setData }: { isOpen: boolean, onClose: () => void, setData: (val: any) => void }) => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ full_name: string, email: string, phone: number, exp_pay: string, paid_date: string }>()

    const onSubmit = async (form: any) => {
        try {
            setLoading(true)
            await http.post('user/register', form).then(d => setData((val: any[]) => [...val, d.data]))
            setLoading(false)
            onClose()
        } catch (error: any) {
            toast.error(error.response?.data?.message)
            setLoading(false)
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
                <ModalHeader>Foydalanuvchi qo&apos;shish</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder="To'liq ismi"
                            label="To'liq ismi"
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('full_name', { required: "Foydalanuvchi ismini kiriting" })}
                            isInvalid={!!errors.full_name}
                            errorMessage={errors.full_name && errors.full_name?.message}
                            isDisabled={loading}
                        />
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder='Email'
                            label='Email'
                            labelPlacement='outside'
                            color='primary'
                            type='email'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('email', {
                                required: 'Email kiriting',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email kiriting'
                                }
                            })}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email && errors.email?.message}
                            isDisabled={loading}
                        />
                        <Input
                            variant='bordered'
                            label='Telefon raqam'
                            labelPlacement='outside'
                            color='primary'
                            placeholder='Telefon raqam'
                            type='tel'
                            radius='sm'
                            classNames={{ label: 'text-[#344054]' }}
                            fullWidth
                            {...register('phone', {
                                required: 'Telefon raqam kiriting',
                                pattern: {
                                    value: /^\+998\d{2}\d{3}\d{2}\d{2}$/,
                                    message: 'Telefon raqam kiriting'
                                }
                            })}
                            isInvalid={!!errors.phone}
                            errorMessage={errors.phone && errors.phone?.message}
                            isDisabled={loading}
                        />

                        <Input
                            variant='bordered'
                            labelPlacement='outside'
                            color='primary'
                            label='Oxirgi kun'
                            placeholder='Oxirgi kun'
                            radius='sm'
                            classNames={{ label: 'text-[#344054]' }}
                            fullWidth
                            type='datetime-local'
                            {...register('exp_pay', {
                                required: 'Vaqtni tanlang'
                            })}
                            isInvalid={!!errors.exp_pay}
                            errorMessage={errors.exp_pay && errors.exp_pay?.message}
                            isDisabled={loading}
                        />
                        <Input
                            variant='bordered'
                            label="To'langan kun"
                            labelPlacement='outside'
                            color='primary'
                            placeholder="To'langan kun"
                            radius='sm'
                            classNames={{ label: 'text-[#344054]' }}
                            fullWidth
                            type='datetime-local'
                            {...register('paid_date', {
                                required: 'Vaqtni tanlang'
                            })}
                            isInvalid={!!errors.paid_date}
                            errorMessage={errors.paid_date && errors.paid_date?.message}
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