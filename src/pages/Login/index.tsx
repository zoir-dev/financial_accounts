
'use client'
import Image from 'next/image'
import section_img from '@/assets/auth_section.png'
import logo from '@/assets/logo.png'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { http } from '@/utils/http'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
const LoginPage = () => {

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ phone: string, password: string }>()

    const router = useRouter()


    const mutation: any = useMutation<any>({
        mutationFn: (data) => {
            return http.post('auth/signin', data).then(res => res.data)
        },
        onSuccess() {
            reset()
            router.push('/')
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJveWJla2JlcmRpZXY3MTVAZ21haWwuY29tIiwiaXNfYWN0aXZlIjpmYWxzZSwiaWF0IjoxNzEwOTMyMjU4LCJleHAiOjE3MTExMDUwNTh9.2BexmACZT8oPOplF17IvPd7HDD8rg8TpOX_nD03qPj0')
            toast.success("Muvaffaqqiyatli o'tdingiz!")
        },
        onError(error: any) {
            toast.error(error.response?.data?.message || error.message)
        }
    })

    return (
        <div className='flex justify-center xl:gap-[130px] gap-[60px] px-4'>
            <div className='flex flex-col items-center gap-[95px] lg:gap-[145px] pt-5 sm:pt-[125px] w-full sm:w-auto'>
                <Image src={logo} alt='logo' className='w-[154px] sm:w-[250px] lg:w-auto' loading='lazy' />
                <div className='flex flex-col gap-[32px] w-full max-w-[400px] sm:max-w-[360px]'>
                    <div>
                        <h2 className='pb-2 sm:pb-3 text-2xl text-center sm:text-3xl lg:text-4xl font-semibold text-text1'>Kirish</h2>
                        <p className='sm:text-base text-center text-text2'>Xush kelibsiz. Iltimos o’z parol va log in kiriting</p>
                    </div>
                    <form onSubmit={handleSubmit(mutation.mutate)} className='flex flex-col gap-[24px]'>
                        <Input
                            placeholder='Telefon raqam kiriting'
                            variant='bordered'
                            radius='sm'
                            label="Telefon raqam"
                            labelPlacement='outside'
                            color='primary'
                            type='phone'
                            defaultValue='+998931234567'
                            classNames={{
                                label: "font-semibold text-text3",
                                inputWrapper: 'bg-white'
                            }}
                            {...register("phone", {
                                required: "Telefon raqam majburiy",
                                pattern: {
                                    value: /^\+998\d{2}\d{3}\d{2}\d{2}$/,
                                    message: "Telefon raqam noto'g'ri "
                                },
                            })}
                            isInvalid={!!errors.phone}
                            errorMessage={errors.phone && errors.phone?.message}
                        // isDisabled={isLoading}
                        />
                        <Input
                            placeholder='Parolingizni kiriting'
                            variant='bordered'
                            radius='sm'
                            label="Parol"
                            type='password'
                            labelPlacement='outside'
                            color='primary'
                            defaultValue='IWUH0Zoz'
                            classNames={{
                                label: "font-semibold text-text3",
                                inputWrapper: "bg-white"
                            }}
                            {...register('password', {
                                required: 'Parol majburiy',
                                minLength: {
                                    value: 5,
                                    message: "Parol juda qisqa"
                                }
                            })}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password && errors.password?.message}
                        // isDisabled={isLoading}
                        />
                        <Button
                            color='primary'
                            type='submit'
                            fullWidth
                            radius='sm'
                            className='font-semibold'
                        // isLoading={isLoading}
                        >
                            Kirish
                        </Button>
                    </form>
                </div>
            </div>
            <Image src={section_img} alt='section_img' className='h-screen aspect-[526/963] hidden lg:inline' loading='lazy' />
        </div>
    )
}

export default LoginPage