// app/providers.tsx
'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
    const query = new QueryClient()
    const pathName = usePathname()
    useEffect(() => {
        scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <QueryClientProvider client={query}>
            <NextUIProvider>
                <Toaster position='top-center' />
                {pathName !== '/login' && <div className='pb-[76px]'>
                    <Header />
                </div>}
                <div className={`${pathName !== '/' && 'myContainer'} ${pathName !== '/login' && 'pt-[60px]'} overflow-x-hidden`}>
                    {children}
                </div>
                {pathName !== '/login' && <div className=''>
                    <Footer />
                </div>}
                <ReactQueryDevtools initialIsOpen={false} />
            </NextUIProvider>
        </QueryClientProvider>
    )
}