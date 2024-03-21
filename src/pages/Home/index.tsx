import React from 'react'
import Demo from './Demo'
import Results from './Results'
import Info from './Info'
import Slider from './Slider'
import Location from './Location'
import Questions from './Questions'
import Contact from './Contact'

const HomePage = () => {
    return (
        <div className='flex flex-col gap-[90px] w-full pb-[90px]'>
            <div className='myContainer flex flex-col gap-[90px]'>
                <Demo />
                <Results />
                <Info />
            </div>
            <div className='w-full overflow-hidden'>
                <Slider />
            </div>
            <div className="myContainer flex flex-col gap-[90px]">
                <Location />
                <Questions />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage