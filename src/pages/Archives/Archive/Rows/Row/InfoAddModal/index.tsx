import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import Add from '../ControlInfo/Bandlik/Add'

const InfoAddModal = ({ isOpen, onClose, type, data }: thisProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} size='lg' backdrop='blur'
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
        <ModalHeader>Arxiv {data ? 'tahrirlash' : "qo'shish"}</ModalHeader>
        <ModalBody>
          {type === 'bandlik' && <Add data={data} />}
          {/* {type === 'agroinspeksiya' && <Agroinspeksiya info={info} />} */}
          {/* {type === 'mcuz' && <Mcuz info={info} />} */}
          {/* {type === 'sanoat' && <Sanoat info={info} />} */}
          {/* {type === 'ypx' && <Ypx info={info} />} */}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default InfoAddModal

interface thisProps {
  isOpen: boolean,
  onClose: () => void,
  type?: string,
  data: any
}