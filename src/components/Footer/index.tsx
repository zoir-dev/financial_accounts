import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import { scrollToElement } from '@/utils/scroll'
const Footer = () => {
    return (
        <footer className='w-full bg-primary pt-12 sm:pt-16 pb-12 text-white'>
            <div className="myContainer">
                <div className='flex flex-col items-center text-center'>
                    <h2 className='font-semibold text-xl sm:text-3xl sm:w-[70%]'>Biz bilan kompaniya tahlil natijalariga tez va oson yechim toping</h2>
                    <p className='text-base sm:text-xl text-[#EAECF0] pt-2 sm:pt-4 pb-8 sm:pb-10'>Join over 4,000+ startups already growing with us</p>
                    <div className='flex  flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                        <Button className='text-white w-full !border-white' variant='bordered'>Chat to us</Button>
                        <Button className='text-primary w-full  bg-white'>Boshlash</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-[82px] md:flex justify-center gap-10 text-[#EAECF0] pb-[48px] lg:pb-[96px]">
                    <div className="flex flex-col mr-auto gap-[16px]">
                        <p className="text-[#D0D5DD] font-semibold">Ma&apos;lumotlar</p>
                        <Link href=''>Biz haqimizda</Link>
                        <p className='cursor-pointer' onClick={() => scrollToElement('partner')}>Hamkorlar</p>
                        <Link href=''>Xizmatlar</Link>
                    </div>
                    <div className="flex flex-col mr-auto gap-[16px]">
                        <p className="text-[#D0D5DD] font-semibold">Ariza qoldrish</p>
                        <a href='https://t.me/smth' target='_blank'>Telegram</a>
                        <a href='tel: +998994050940'>Telefon raqam</a>
                        <a href='mailto: smth@gmail.com'>Gmail</a>
                    </div>
                    <div className="flex flex-col mr-auto gap-[16px]">
                        <p className="text-[#D0D5DD] font-semibold">Pricing</p>
                        <Link href=''>Obuna sotib olish</Link>
                    </div>
                    <div className="flex flex-col mr-auto gap-[16px]">
                        <p className="text-[#D0D5DD] font-semibold">Blog</p>
                        <a href='https://facebook.com' target='_blank'>Facebook</a>
                        <a href='https://t.me/smth' target='_blank'>Telegram</a>
                        <a href='https://instagram.com' target='_blank'>Instagram</a>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t-[2px] border-[#D0D5DD]'>
                    <p>© 2027 Dasturchilar ‘’Nahr group’’.</p>
                    <Image src={logo} alt='logo' className='brightness-0 invert w-[133px]' />
                    <div className='flex items-center gap-6 sm:hidden pt-6'>
                        <a href="https://Twitter.com">
                            <Twitter className='w-6' fontVariant='filled' />
                        </a>
                        <a href="https://linkedin.com">
                            <Linkedin className='w-6' />
                        </a>
                        <a href="https://facebook.com">
                            <Facebook className='w-6' />
                        </a>
                        <a href="https://Github.com">
                            <Github className='w-6' />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer