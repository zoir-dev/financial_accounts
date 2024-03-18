import React from 'react'

const Results = () => {
    return (
        <div className='w-full flex flex-col gap-8 sm:gap-16'>
            <div>
                <h2 className='text-center pb-4 sm:pb-5 text-3xl sm:text-4xl font-semibold text-text1'>Bizning natijalarimizdan</h2>
                <p className='text-center text-text2 text-lg sm:text-xl'>Qurilish pudrachi kompaniyalar biz bilan ishlaganidan minnador</p>
            </div>
            <div className='flex flex-wrap gap-8 justify-around bg-primary4 p-16 rounded-2xl'>
                <div className='flex flex-col items-center gap-5 text-primary'>
                    <h2 className='font-semibold text-6xl'>400+</h2>
                    <p className='text-lg text-center'>Hamkorlar</p>
                </div>
                <div className='flex flex-col items-center gap-5 text-primary'>
                    <h2 className='font-semibold text-6xl'>100%</h2>
                    <p className='text-lg text-center'>To&apos;g&apos;ri tahlil</p>
                </div>
                <div className='flex flex-col items-center gap-5 text-primary'>
                    <h2 className='font-semibold text-6xl'>100%</h2>
                    <p className='text-lg text-center'>Xavfsiz arxiv saqlanishlar</p>
                </div>
            </div>
        </div>
    )
}

export default Results