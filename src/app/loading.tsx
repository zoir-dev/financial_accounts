import { CircularProgress } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <CircularProgress color='primary' />
        </div>
    )
}

export default Loading