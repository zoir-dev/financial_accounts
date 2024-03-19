import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-[80vh] flex items-center justify-center'>
            <Spinner color='primary' size='lg' />
        </div>
    )
}

export default Loading