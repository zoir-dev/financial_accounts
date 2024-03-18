import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToElement } from '@/utils/scroll';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${!scrolled ? 'bg-white' : 'bg-primary'} w-full py-4 fixed z-10 top-0 duration-250`}>
            <div className='myContainer flex items-center justify-between'>
                <div className={`flex items-center gap-10 ${!scrolled ? 'text-primary' : 'text-white'}`}>
                    <Link href='/'>
                        <Image src={logo} alt='logo' className={`w-[160px] ${scrolled && 'brightness-0 invert'}`} loading='lazy' />
                    </Link>
                    <div className='flex gap-3'>
                        <Button
                            color='primary'
                            radius='sm'
                            variant='ghost'
                            onClick={() => scrollToElement('location')}
                            className={`!border-none !font-bold duration-250 ${scrolled && '!text-white hover:!bg-white hover:!text-primary'}`}
                        >
                            Manzil
                        </Button>
                        <Button
                            color='primary'
                            radius='sm'
                            variant='ghost'
                            className={`!border-none !font-semibold duration-250 ${scrolled && '!text-white hover:!bg-white hover:!text-primary'}`}
                        >
                            Narxlar
                        </Button>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <Button radius='sm' onClick={() => scrollToElement('contact')} className={`bg-${!scrolled ? 'primary' : 'white'} text-${!scrolled ? 'white' : 'primary'}`}>
                        Bog&apos;lanish
                    </Button>
                    <Link href='/login'>
                        <Button radius='sm' className={`bg-${!scrolled ? 'primary' : 'white'} text-${!scrolled ? 'white' : 'primary'}`}>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
