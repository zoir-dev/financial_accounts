import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const AddModal = ({ isOpen, onClose, data, regions, setIndex, fetchData }: thisProps) => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ name: string, stir: number, region: number, category: number }>()


    const [category, setCategory] = useState<{ id: number, title: string }[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                await http.get('category').then(res => setCategory(res.data))
            } catch (error) {
            }
        }
        fetchData()
    }, [])

    const onSubmit = async (form: any) => {
        const newForm = {
            name: form.name,
            stir: +form.stir,
            region: +form.region,
            category: +form.category
        }
        try {
            setLoading(true)
            if (data) {
                await http.put('organization/' + data?.id, newForm)
                toast.success("Muvaffaqqiyatli tahrirlandi")
            } else {
                await http.post('organization', newForm)
                toast.success("Muvaffaqqiyatli qo'shildi")
            }
            onClose()
            fetchData()
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
            setIndex(-1)
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(), reset(), setIndex(-1) }} isDismissable={false} size='lg' backdrop='blur'
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
                            type='phone'
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
                            defaultSelectedKeys={[`${data?.region?.id}`]}
                            isDisabled={loading}
                        >
                            {regions?.map(r => (
                                <SelectItem key={+r.id} value={+r.id}>
                                    {r.name}
                                </SelectItem>
                            ))}
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
                            defaultSelectedKeys={[`${data?.category?.id}`]}
                            isDisabled={loading}
                        >
                            {category?.map(c => (
                                <SelectItem key={+c.id} value={+c.id}>
                                    {c.title}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className='flex gap-3 pt-5'>
                            <Button variant='bordered' radius='sm' onClick={() => { onClose(), reset(), setIndex(-1) }} isDisabled={loading} fullWidth>
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



interface thisProps {
    isOpen: boolean,
    onClose: () => void,
    data: any,
    regions: { id: number, name: string, organizations: any[] }[],
    setIndex: (val: number) => void,
    fetchData: () => void
}