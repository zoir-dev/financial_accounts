import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

const RowModal = ({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data?: any }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ company: string, feedback: string }>()


    const onSubmit = (data: { company: string, feedback: string }) => {
        console.log(data)
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
                            placeholder='Kompaniya'
                            label='Kompaniya'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('company', { required: "Kompaniya nomini kiriting" })}
                            isInvalid={!!errors.company}
                            errorMessage={errors.company && errors.company?.message}
                            defaultValue={data?.title}
                        />
                        <Textarea
                            radius='sm'
                            variant='bordered'
                            placeholder="Fikr"
                            label='Fikr'
                            labelPlacement='outside'
                            color='primary'
                            classNames={{ label: "text-[#344054]" }}
                            {...register('feedback', { required: 'Fikr kiriting' })}
                            isInvalid={!!errors.feedback}
                            errorMessage={errors.feedback && errors.feedback?.message}
                            defaultValue={data?.des}
                        />
                        <div className='flex gap-3'>
                            <Button variant='bordered' radius='sm' onClick={() => { onClose(), reset() }}>Bekor qilish</Button>
                            <Button color='primary' radius='sm' type='submit'>Saqlash</Button>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RowModal