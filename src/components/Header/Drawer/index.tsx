'use client'
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react'
import { LogOut, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Tab, Tabs } from '@nextui-org/react';
import { scrollToElement } from '@/utils/scroll';
import Link from 'next/link';
interface thisProps {
    open: boolean,
    setOpen: (val: boolean) => void,
    classNames: any,
    links: { href: string, name: string }[]
}
const Drawer = ({ open, setOpen, classNames, links }: thisProps) => {
    const bodyRef = useRef(typeof document !== 'undefined' && document?.querySelector('body'));
    const router = useRouter()
    const pathName = usePathname()


    useEffect(() => {
        const updatePageScroll = () => {
            if (typeof document !== 'undefined' && bodyRef.current) {
                if (open) {
                    bodyRef.current.style.overflow = 'hidden';
                } else {
                    bodyRef.current.style.overflow = '';
                }
            }
        };
        if (typeof window !== 'undefined') {
            updatePageScroll();
        }
    }, [open]);

    const logOut = () => {
        localStorage.removeItem('token')
        router.push('/')
        setOpen(false)
    }
    return ReactDOM.createPortal(
        <div id='drawer'>
            <div className={`fixed z-[-1] w-screen bottom-0 h-full duration-500 drawer 
             ${open ? 'backdrop-blur-md !z-[1000]' : 'opacity-0'}`}
            />
            <div className={`fixed shadow-card w-[300px] p-[16px] max-w-full !z-[1000] !duration-500 ml-[-20px] h-[100vh] top-0 right-0 flex  shadow-lg flex-col gap-[16px] items-center ${open ? 'translate-x-[1px] duration-400' : 'translate-x-[300px]'} bg-primary border-1 border-white rounded-l-lg py-6`}>
                <div className={open ? 'w-full !z-[1000] flex flex-col justify-between h-[100dvh] pl-12' : 'hidden'}>
                    <div>
                        <div className='flex justify-end'>
                            <X className='text-white cursor-pointer' onClick={() => setOpen(false)} />
                        </div>
                        {pathName === '/' ?
                            <div className='flex flex-col gap-3'>
                                <Button
                                    color='primary'
                                    radius='sm'
                                    variant='ghost'
                                    onClick={() => { scrollToElement('location'), setOpen(false) }}
                                    className={`!border-none text-white !font-bold duration-250 `}
                                >
                                    Manzil
                                </Button>
                                <Button
                                    color='primary'
                                    radius='sm'
                                    variant='ghost'
                                    className={`!border-none text-white !font-semibold duration-250 `} onClick={() => setOpen(false)}
                                >
                                    Narxlar
                                </Button>
                                <div className='flex gap-3'>
                                    <Button radius='sm' onClick={() => { scrollToElement('contact'), setOpen(false) }}
                                        className={`bg-white text-primary`}>
                                        Bog&apos;lanish
                                    </Button>
                                    <Link href='/login'>
                                        <Button radius='sm' className={`bg-white text-primary`} onClick={() => setOpen(false)}>
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            :
                            <Tabs
                                variant='light'
                                aria-label="Tabs variants"
                                color='primary'
                                classNames={classNames}
                                onSelectionChange={(e) => { router.push(`${e}`), setOpen(false) }}
                                selectedKey={pathName}
                            >
                                {links.map(l => (
                                    <Tab key={l.href} title={l.name} />
                                ))}
                            </Tabs>
                        }
                    </div>
                    {pathName !== '/' && < div className='flex flex-col gap-3'>
                        <button className='text-white text-lg flex items-center gap-2 cursor-pointer border-none bg-transparent !font-normal' onClick={logOut}>
                            <LogOut className='w-5' /> Chiqish
                        </button>
                        <p className='font-semibold text-white text-xl'>+998 94 222 22 22</p>
                    </div>}
                </div>
            </div>
        </div >,
        bodyRef.current! || document.body
    )
}

export default Drawer