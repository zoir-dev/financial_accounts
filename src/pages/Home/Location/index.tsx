'use client'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import location_img from '@/assets/location_img.png'
import Image from 'next/image';
const Location = () => {
    const defaultState = {
        center: [41.2995, 69.2401],
        zoom: 15,
    };
    return (
        <div id='location'>
            <h2 className='font-semibold text-3xl md:text-5xl text-center pb-12'>Bizning manzil</h2>
            <div className='flex gap-5 flex-col items-center lg:items-stretch lg:flex-row'>
                <div className='w-full h-[500px] sm:h-[616px] rounded-3xl border-1 border-primary overflow-hidden'>
                    <YMaps>
                        <Map state={defaultState} className=' w-full h-full'>
                            <Placemark geometry={[...defaultState.center]} />
                        </Map>
                    </YMaps>
                </div>
                <div className='w-full  lg:h-[616px] sm:w-[380px] border-1 border-primary bg-white rounded-3xl py-8 px-3'>
                    <h3 className="pb-[20px] text-lg font-semibold text-text1">
                        Toshkent
                    </h3>
                    <div className="pb-[30px] w-full md:w-[329px]">
                        <Image src={location_img} alt="" className="rounded-[10px] w-full" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#475467]">Manzil:</p>
                        <h3 className="pb-[20px] text-lg text-text1 font-semibold">
                            Chilonzor tumani Qatortol ko’cha 1-uy
                        </h3>
                        <p className="text-text2">Mo’ljal</p>
                        <h3 className="pb-[20px] text-lg font-semibold text-text1">
                            Tatarlar muyulishi, 4 etajli domlar
                        </h3>
                        <p className="text-text2">Ish vaqti</p>
                        <h3 className="pb-[20px] text-lg font-semibold text-text1">
                            09:00 dan 18:00 gacha
                        </h3>
                        <p className="text-text2">Telefon raqam</p>
                        <div className="flex flex-row gap-3 xl:flex-col xl:gap-0">
                            <a href='tel: +998994050940' className="text-lg hover:underline font-semibold text-text1">+998994050940</a>
                            <a href='tel: +998712488651' className=" hover:underline text-lg font-semibold text-text1">
                                +998712488651
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
