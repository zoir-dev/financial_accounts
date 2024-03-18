'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { MinusCircle, PlusCircle } from 'lucide-react'
import React from 'react'

const Questions = () => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='text-center'>
                <h2 className='text-text1 font-semibold text-3xl sm:text-4xl pb-5'>Ko&apos;p beriladigan savollar</h2>
                <p className='text-text2 text-lg sm:text-xl'>Pudratchi tashkilotlar va o’z savolaringizga javob topasiz</p>
            </div>
            <Accordion showDivider={false} className='gap-8 flex flex-col'>
                <AccordionItem
                    key='1'
                    aria-label='1'
                    title='Is there a free trial available?'
                    classNames={{
                        content: 'w-[95%] text-text2',
                        title: "text-text1"
                    }}
                    indicator={({ isOpen }) => (!isOpen ?
                        <PlusCircle className='text-primary' /> :
                        <MinusCircle className='rotate-90 text-primary' />
                    )}
                >
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </AccordionItem>
                <AccordionItem
                    key='2'
                    aria-label='2'
                    title='Is there a free trial available?'
                    classNames={{
                        content: 'w-[95%] text-text2'
                    }}
                    indicator={({ isOpen }) => (!isOpen ?
                        <PlusCircle className='text-primary' /> :
                        <MinusCircle className='rotate-90 text-primary' />
                    )}
                >
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </AccordionItem>
                <AccordionItem
                    key='3'
                    aria-label='3'
                    title='Is there a free trial available?'
                    classNames={{
                        content: 'w-[95%] text-text2'
                    }}
                    indicator={({ isOpen }) => (!isOpen ?
                        <PlusCircle className='text-primary' /> :
                        <MinusCircle className='rotate-90 text-primary' />
                    )}
                >
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </AccordionItem>
                <AccordionItem
                    key='4'
                    aria-label='4'
                    title='Is there a free trial available?'
                    classNames={{
                        content: 'w-[95%] text-text2'
                    }}
                    indicator={({ isOpen }) => (!isOpen ?
                        <PlusCircle className='text-primary' /> :
                        <MinusCircle className='rotate-90 text-primary' />
                    )}
                >
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Questions