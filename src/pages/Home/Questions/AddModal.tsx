import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const AddModal = ({ isOpen, onClose, data, setData }: { isOpen: boolean, onClose: () => void, data: any, setData: (val: any) => void }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ question: string, answer: string }>()

    const [loading, setLoading] = useState(false)


    const onSubmit = async (form: { question: string, answer: string }) => {
        try {
            setLoading(true)
            if (data?.answer) {
                await http.put('faq/' + data.id, form)
                    .then(d => setData((val: any) => [...val.filter((f: any) => f.id !== data.id), d.data].sort((a, b) => a.id - b.id)))
                toast.success("Muvaffaqqiyatli tahrirlandi")
            } else {
                await http.post('faq', form).then(d => setData((val: any) => [...val, d.data].sort((a, b) => a.id - b.id)))
                toast.success("Muvaffaqqiyatli qo'shildi")
            }
            onClose()
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(), reset() }} isDismissable={false} size='2xl' backdrop='blur'
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
                        <Input
                            radius='sm'
                            variant='bordered'
                            placeholder='Savol'
                            label='Savol'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('question', { required: "Savol kiriting" })}
                            isInvalid={!!errors.question}
                            errorMessage={errors.question && errors.question?.message}
                            defaultValue={data?.question === 'Yangi savol' ? '' : data?.question}
                            isDisabled={loading}
                        />
                        <Textarea
                            radius='sm'
                            variant='bordered'
                            placeholder="Javob"
                            label='Javob'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('answer', { required: 'Javob kiriting' })}
                            isInvalid={!!errors.answer}
                            errorMessage={errors.answer && errors.answer?.message}
                            defaultValue={data?.answer}
                            isDisabled={loading}
                        />
                        <div className='flex gap-3'>
                            <Button variant='bordered' radius='sm' onClick={() => { onClose(), reset() }} isDisabled={loading}>Bekor qilish</Button>
                            <Button color='primary' radius='sm' type='submit' isLoading={loading}>Saqlash</Button>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AddModal