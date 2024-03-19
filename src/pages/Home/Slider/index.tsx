'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/utils/http";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Slider() {
    const sliderRef: any = useRef()
    const [data, setData] = useState([])
    // const { data, isSuccess } = useQuery({
    //     queryKey: ['partners'],
    //     queryFn: async () => await http.get("home/partner").then(res => res.data),
    // });

    useEffect(() => {
        http.get('home/partner').then(res => setData(res.data))
    }, [])
    useEffect(() => {
        if (data.length) {
            sliderRef.current.click()
        }
    }, [data.length])


    return (
        <div className="flex flex-col gap-8">
            <Swiper
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Navigation, Autoplay]}
                className="w-full !duration-1000"
                speed={500}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
            >
                {data &&
                    data?.map((partner: any) => {
                        return (
                            <SwiperSlide key={partner.id} className="w-[100%]  sm:!w-[1180px] !duration-1000 !transition-all ">
                                <div className="bg-[#C35427]  flex flex-col lg:text-left lg:flex-row px-5 py-[30px] md:py-[97px] rounded-[25px]">
                                    <div className="md:w-[601px] flex flex-col lg:justify-start">
                                        <h2 className="leading-[38px] md:leading-[60px] text-[30px] md:text-[35px] pb-[32px] md:pb-[48px] text-white">
                                            {partner.thought}
                                        </h2>
                                        <div className="flex items-center gap-[12px] pb-[50px] lg:pb-0 mt-auto">
                                            <Image
                                                className="rounded-[15px]"
                                                src={partner.logo_url}
                                                alt=""
                                                width={56}
                                                height={100}
                                            />
                                            <p className="text-white font-semibold">{partner.name}</p>
                                        </div>
                                    </div>
                                    <div className="lg:ml-auto px-[30px] md:px-[69px] bg-white flex justify-center rounded-[15px]">
                                        <Image
                                            src={partner.logo_url} alt=""
                                            width={314}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
            <div className="flex justify-center gap-5">
                <div className="swiper-button-prev bg-[#C35427] cursor-pointer p-[16px] text-[24px] rounded-full text-white" ref={sliderRef}>
                    <ChevronLeft />
                </div>
                <div className="swiper-button-next bg-[#C35427] cursor-pointer p-[16px] text-[24px] rounded-full text-white">
                    <ChevronRight />
                </div>
            </div>
        </div>
    );
}

export default Slider;
