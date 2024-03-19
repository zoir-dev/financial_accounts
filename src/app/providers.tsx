'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())
    const pathName = usePathname()
    const router = useRouter()
    const token = typeof window !== 'undefined' && localStorage.getItem('token')
    useEffect(() => {
        scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        if (token && (pathName === '/' || pathName === '/login')) {
            router.push('/main')
        } else if (!token && !['/', '/login'].find(f => f === pathName)) {
            router.push('/')
        }
    }, [pathName, token, router])
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                <NextUIProvider>
                    <Toaster position='top-center' />
                    {pathName !== '/login' && <div className='pb-[76px]'>
                        <Header />
                    </div>}
                    <div className={`${pathName !== '/' && 'myContainer'} ${pathName !== '/login' && 'pt-[60px]'} overflow-x-hidden`}>
                        {children}
                    </div>
                    {pathName === '/' && <Footer />}
                </NextUIProvider>
            </ReactQueryStreamedHydration>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}