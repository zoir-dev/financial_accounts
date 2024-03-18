'use client'
import { Button, useDisclosure } from '@nextui-org/react'
import { PlayCircle } from 'lucide-react'
import VideoModal from './Modal';
import Image from 'next/image';
import noute from '@/assets/noute.jpg'
import line from '@/assets/line.png'

const Demo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className='flex flex-col lg:flex-row gap-10 xl:gap-[90px] items-stretch'>
            <div className='w-full flex flex-col sm:items-start'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-text1 pb-8'>Sohaviy pudratchi tashkilotlar reytingi</h1>
                <p className='text-lg sm:text-xl text-text2 pb-10'>
                    Elektron reyting arxivi raqamli ma&apos;lumotlar va hisob-kitoblarga asoslangan turli xil ob&apos;ektlar yoki hodisalarni tahlil qilish va taqqoslash uchun qimmatli vositadir. Bu ob&apos;ektlarning turli jihatlari va xususiyatlarini tez va qulay tarzda taqqoslash imkonini beradi va ularning vaqt o&apos;tishi bilan o&apos;zgarishini kuzatish imkonini beradi. Elektron reyting arxivi asosli qarorlar qabul qilish, tendentsiyalarni tahlil qilish va ko&apos;rsatkichlarni aniqlash uchun ishlatilishi mumkin.
                </p>
                <Button color='primary' radius='sm' onClick={onOpen}>
                    <PlayCircle size={20} /> Demo
                </Button>
            </div>
            <div className='h-[240px] sm:h-[440px] md:h-[640px] w-full aspect-[574/640] relative'>
                <Image src={noute} alt='noutbuk rasmi' className='h-full w-full rounded-tl-[64px] lg:rounded-tl-[160px] object-cover' />
                <Image src={line} alt='' className='w-[194px]  sm:w-[298px]  absolute right-0 bottom-0 lg:top-0 translate-x-1/2 translate-y-[55px] lg:-translate-y-[40px]' />
            </div>
            <VideoModal isOpen={isOpen} onClose={onClose} />
        </div>
    )
}

export default Demo