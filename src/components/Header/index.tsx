'use client'
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToElement } from '@/utils/scroll';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut, Menu, User } from 'lucide-react';
import dynamic from 'next/dynamic';
const Drawer = dynamic(() => import('./Drawer'), { ssr: false })

const Header = () => {
    const pathName = usePathname()
    const [scrolled, setScrolled] = useState(pathName === '/' ? false : true);
    const router = useRouter()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setScrolled(pathName === '/' ? false : true)
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(pathName === '/' ? false : true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathName]);

    const logOut = () => {
        localStorage.removeItem('token')
        router.push('/')
    }

    const classNames = {
        tabList: 'flex-col lg:flex-row',
        tab: '!text-primary !text-white justify-start lg:justify-center',
        cursor: `!bg-primary py-5 mt-[-4px] shadow-none ${scrolled && '!bg-white'}`,
        tabContent: `group-data-[selected=true]:text-white text-primary ${scrolled && "group-data-[selected=true]:text-primary text-white"}`
    }

    return (
        <div className={`${!scrolled ? 'bg-white' : 'bg-primary'} w-full py-4 fixed z-10 top-0 duration-250`}>
            <div className='myContainer flex items-center justify-between'>
                <div className={`flex items-center gap-5 ${!scrolled ? 'text-primary' : 'text-white'}`}>
                    <Image src={logo} alt='logo' className={`w-[160px] ${scrolled && 'brightness-0 invert'}`} loading='lazy' />
                    {pathName === '/' ? <div className={` gap-3 hidden lg:flex `}>
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
                    </div> :
                        <Tabs
                            variant='light'
                            aria-label="Tabs variants"
                            color='primary'
                            classNames={classNames}
                            onSelectionChange={(e) => router.push(`${e}`)}
                            selectedKey={pathName}
                            className='hidden lg:flex'
                        >
                            {links.map(l => (
                                <Tab key={l.href} title={l.name} />
                            ))}
                        </Tabs>
                    }
                </div>
                {pathName === '/' ? <div className=' gap-3 hidden lg:flex'>
                    <Button radius='sm' onClick={() => scrollToElement('contact')}
                        className={`bg-${!scrolled ? 'primary' : 'white'} text-${!scrolled ? 'white' : 'primary'}`}>
                        Bog&apos;lanish
                    </Button>
                    <Link href='/login'>
                        <Button radius='sm' className={`bg-${!scrolled ? 'primary' : 'white'} text-${!scrolled ? 'white' : 'primary'}`}>
                            Login
                        </Button>
                    </Link>
                </div> :
                    <Dropdown className={`bg-primary text-white relative border-1 border-primary text-center ${scrolled && 'border-white'}`}>
                        <DropdownTrigger>
                            <Button isIconOnly variant='light' className='hidden lg:flex'>
                                <User className={`text-primary ${scrolled && 'text-white'} cursor-pointer `} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant='light' aria-label='actions'>
                            <DropdownItem className='border-b border-white rounded-none pb-3'>
                                <p className='font-semibold !text-white' key='number'>
                                    +998 94 222 22 22
                                </p>
                            </DropdownItem>
                            <DropdownItem onClick={logOut} key='action'>
                                <div className='flex items-center justify-center gap-2 text-white'>
                                    <LogOut className='w-4' /> Chiqish
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                }
                <Menu className={`text-primary ${scrolled && 'text-white'} cursor-pointer lg:hidden`} onClick={() => setOpen(true)} />
            </div>
            <Drawer open={open} setOpen={setOpen} classNames={classNames} links={links} />
        </div>
    );
};

export default Header;


const links = [
    {
        name: 'Arxivlar',
        href: '/archive',
    },
    {
        name: 'Tashkilot',
        href: '/user',
    },
    {
        name: 'Kategoriya',
        href: '/category',
    },
    {
        name: 'Foydalanuvchilar',
        href: '/users',
    },
    {
        name: 'Asosiy sahifa',
        href: '/main',
    },
]
