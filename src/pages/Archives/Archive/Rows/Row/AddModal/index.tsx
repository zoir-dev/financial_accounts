import { http } from '@/utils/http'
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const AddModal = ({ isOpen, onClose, data, url, id, fetchData, setIndex }: thisProps) => {
  const [loading, setLoading] = useState(false)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string, value: number, ball: number, max_ball: number }>()


  const onSubmit = async (form: any) => {
    const newForm = {
      archive: id,
      name: form.name,
      value: +form.value,
      ball: +form.ball,
      max_ball: +form.ball
    }
    try {
      setLoading(true)
      if (data) {
        await http.put(url + '/' + data?.id, newForm)
        toast.success("Muvaffaqqiyatli tahrirlandi")
      } else {
        await http.post(url || '', newForm)
        toast.success("Muvaffaqqiyatli qo'shildi")
      }
      setLoading(false)
      onClose()
      fetchData()
      setIndex(-1)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error?.message)
    } finally {
      setLoading(false)
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
        <ModalHeader>Arxiv {data ? 'tahrirlash' : "qo'shish"}</ModalHeader>
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
              {...register('name', { required: "Nom kiriting" })}
              isInvalid={!!errors.name}
              errorMessage={errors.name && errors.name?.message}
              defaultValue={data?.name}
              isDisabled={loading}
            />
            <Input
              radius='sm'
              variant='bordered'
              placeholder="Value"
              label="Value"
              labelPlacement='outside'
              color='primary'
              classNames={{ label: "text-[#344054]" }}
              {...register('value', { required: "Value kiriting" })}
              isInvalid={!!errors.value}
              errorMessage={errors.value && errors.value?.message}
              defaultValue={data?.value}
              isDisabled={loading}
            />
            <Input
              radius='sm'
              variant='bordered'
              placeholder="Ball"
              label="Ball"
              labelPlacement='outside'
              color='primary'
              classNames={{ label: "text-[#344054]" }}
              {...register('ball', { required: "Ball kiriting" })}
              isInvalid={!!errors.ball}
              errorMessage={errors.ball && errors.ball?.message}
              defaultValue={data?.ball}
              isDisabled={loading}
            />
            <Input
              radius='sm'
              variant='bordered'
              placeholder="Maksimal ball"
              label="Maksimal ball"
              labelPlacement='outside'
              color='primary'
              classNames={{ label: "text-[#344054]" }}
              {...register('max_ball', { required: "Max ball kiriting" })}
              isInvalid={!!errors.max_ball}
              errorMessage={errors.max_ball && errors.max_ball?.message}
              defaultValue={data?.max_ball}
              isDisabled={loading}
            />
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
  data?: any,
  url?: string,
  id: number,
  fetchData: () => void,
  setIndex: (val: number) => void
}