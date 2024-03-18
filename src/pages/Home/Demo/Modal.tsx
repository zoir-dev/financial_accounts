'use client'
import { Modal, ModalBody, ModalContent, ModalHeader, Spinner } from '@nextui-org/react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [loading, setLoading] = useState(true)
    return (
        <Modal backdrop='blur' isOpen={isOpen} size='2xl'
            onClose={onClose}
            isDismissable={false}
            classNames={{
                closeButton: 'text-white hover:text-black'
            }}
            placement='center'
        >
            <ModalContent className='bg-transparent shadow-none relative'>
                <ModalHeader></ModalHeader>
                <ModalBody className='relative w-full'>
                    {loading && <Spinner color='primary' className='absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2' />}
                    <ReactPlayer
                        url='"https://youtu.be/rMnRDq5mx-w'
                        style={{ background: 'black' }}
                        onReady={() => setLoading(false)}
                    >
                        {/* <source src="https://youtu.be/rMnRDq5mx-w" type="video/mp4" /> */}
                    </ReactPlayer>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default VideoModal