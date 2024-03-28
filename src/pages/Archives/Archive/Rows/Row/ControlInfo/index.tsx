import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import Agroinspeksiya from './Agroinspeksiya'
import Bandlik from './Bandlik'
import Mcuz from './Mcuz'
import Sanoat from './Sanoat'
import Ypx from './Ypx'

const ControlInfo = ({ isOpen, onClose, info, type, size, OnOpen2 }: thisProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} size={size} backdrop='blur'
            className='pb-5'
            placement='center'
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                }
            }}>
            <ModalContent>
                <ModalHeader>
                    Ma&apos;lumotlar
                </ModalHeader>
                <ModalBody>
                    {info ?
                        <>
                            {type === 'agroinspeksiya' && <Agroinspeksiya info={info} />}
                            {type === 'bandlik' && <Bandlik info={info} />}
                            {type === 'mcuz' && <Mcuz info={info} />}
                            {type === 'sanoat' && <Sanoat info={info} />}
                            {type === 'ypx' && <Ypx info={info} />}
                        </> :
                        <h4 className='text-lg font-semibold text-center'>Ma&apos;lumotlar mavjud emas</h4>
                    }
                </ModalBody>
                <ModalFooter className='pb-0'>
                    <Button variant='bordered' radius='sm' onClick={() => { OnOpen2(), onClose() }}>Tahrirlash</Button>
                    <Button variant='bordered' radius='sm' color='primary' onClick={onClose}>Saqlash</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ControlInfo

interface thisProps { isOpen: boolean, onClose: () => void, info: any, type?: string, size?: any, OnOpen2: () => void }