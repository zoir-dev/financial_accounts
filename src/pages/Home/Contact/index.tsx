import avatars from '@/assets/Avatar_group.png'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
const Contact = () => {
    return (
        <div className='flex flex-col gap-8 items-center bg-primary4 py-8 px-5 rounded-2xl' id='contact'>
            <Image src={avatars} alt='People avatar' />
            <div className='text-center'>
                <h4 className='text-primary text-xl font-semibold pb-2'>Savolga javob topolmadingizmi?</h4>
                <p className='text-primary text-base sm:text-lg'>Qisqa javoblar orqali aniqlik topmagan bo’lsangiz biz bilan bo’g’laning!</p>
            </div>
            <Button color='primary'>Bog&apos;lanish</Button>
        </div>
    )
}

export default Contact