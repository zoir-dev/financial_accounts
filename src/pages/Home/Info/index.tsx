import { Building2, Landmark, Train, Waves } from 'lucide-react'
import React from 'react'

const Info = () => {
    return (
        <div className='flex flex-col gap-[64px] md:gap-[96px]'>
            <div>
                <h2 className='text-center pb-4 sm:pb-5 text-4xl md:text-5xl font-semibold text-text1'>Qay sohadagi ma&apos;lumot yetkaza olamiz</h2>
                <p className='text-center text-lg text-text2 sm:text-xl'>BIzni asoasiy tahlilimiz qurilish pudrat tashkilotlar</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-primary text-white p-6 flex flex-col gap-16 items-center rounded-2xl'>
                    <div className='bg-white rounded-[10px] p-3'>
                        <Building2 className='  object-cover text-primary' />
                    </div>
                    <p className='text-center text-base font-semibold'>Umumqurilish-Ijtimoiy ob&apos;yektlar</p>
                </div>
                <div className='bg-primary text-white p-6 flex flex-col gap-16 items-center rounded-2xl'>
                    <div className='bg-white rounded-[10px] p-3'>
                        <Waves className='  object-cover text-primary' />
                    </div>
                    <p className='text-center text-base font-semibold'>Melioratsiya va irrigatsiya</p>
                </div>
                <div className='bg-primary text-white p-6 flex flex-col gap-16 items-center rounded-2xl'>
                    <div className='bg-white rounded-[10px] p-3'>
                        <Train className='  object-cover text-primary' />
                    </div>
                    <p className='text-center text-base font-semibold'>Avtomobil yo&apos;llari, ko&apos;priklar</p>
                </div>
                <div className='bg-primary text-white p-6 flex flex-col gap-16 items-center rounded-2xl'>
                    <div className='bg-white rounded-[10px] p-3'>
                        <Landmark className='  object-cover text-primary' />
                    </div>
                    <p className='text-center text-base font-semibold'>Loyiha tashkilotlari</p>
                </div>
            </div>
        </div>
    )
}

export default Info