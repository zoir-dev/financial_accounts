import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddModal = ({ isOpen, onClose, data, setData }: { isOpen: boolean, onClose: () => void, data: any, setData: (val: any) => void }) => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ name: string, stir: string, region: number, category: string }>()

    const onSubmit = (form: any) => {

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
                <ModalHeader>Tashkilot qo&apos;shish</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder='Tashkilot nomi'
                            label='Tashkilot nomi'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('name', { required: "Tashkilot nomini kiriting" })}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name && errors.name?.message}
                            defaultValue={data?.name}
                            isDisabled={loading}
                        />
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder='STIR'
                            label='STIR'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('stir', { required: "STIR kiriting" })}
                            isInvalid={!!errors.stir}
                            errorMessage={errors.stir && errors.stir?.message}
                            defaultValue={data?.stir}
                            isDisabled={loading}
                        />
                        <Select
                            variant='bordered'
                            label='Viloyat nomi'
                            labelPlacement='outside'
                            color='primary'
                            placeholder='Viloyat nomi'
                            radius='sm'
                            classNames={{ label: 'text-[#344054]' }}
                            fullWidth
                            {...register('region', {
                                required: 'Viloyat nomini tanlang'
                            })}
                            isInvalid={!!errors.region}
                            // errorMessage={errors.region && errors.region?.message}
                            defaultSelectedKeys={data?.region}
                            isDisabled={loading}
                        >
                            <SelectItem key='1' value='1'>
                                1
                            </SelectItem>
                            <SelectItem key='2' value='2'>
                                2
                            </SelectItem>
                            <SelectItem key='3' value='3'>
                                3
                            </SelectItem>
                        </Select>
                        <Select
                            variant='bordered'
                            label='Kategoriya tanlash'
                            labelPlacement='outside'
                            color='primary'
                            placeholder='Kategoriya nomi'
                            radius='sm'
                            classNames={{ label: 'text-[#344054]' }}
                            fullWidth
                            {...register('category', {
                                required: 'Kategoriya tanlang'
                            })}
                            isInvalid={!!errors.category}
                            // errorMessage={errors.category && errors.category?.message}
                            defaultSelectedKeys={data?.category}
                            isDisabled={loading}
                        >
                            <SelectItem key='1' value='1'>
                                1
                            </SelectItem>
                            <SelectItem key='2' value='2'>
                                2
                            </SelectItem>
                            <SelectItem key='3' value='3'>
                                3
                            </SelectItem>
                        </Select>
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