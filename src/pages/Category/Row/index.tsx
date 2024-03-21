import { Button } from "@nextui-org/react";
import { Edit2, Trash2 } from "lucide-react";

const Row = ({ d }: { d: any }) => {
    return (
        <div className='flex items-center justify-between px-4 sm:px-6 py-4 border-b-2 border-default-200'>
            <p className="text-sm w-1/4">{d?.name}</p>
            <p className='w-1/4 text-center'>{d?.ball}</p>
            <div className="w-1/4 flex justify-center">
                {getRating(d?.id)}
            </div>
            <div className='flex items-center justify-end w-1/4'>
                <Button isIconOnly variant='light'>
                    <Trash2 className='text-primary w-5' />
                </Button>
                <Button isIconOnly variant='light'>
                    <Edit2 className='text-gray-600 w-5' />
                </Button>
            </div>
        </div>
    )
}

export default Row


function getRating(id: number) {
    switch (id % 6) {
        case 5:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success`}>AAA</p>;
        case 4:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success bg-opacity-70`}>AA</p>;
        case 3:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-success bg-opacity-50`}>A</p>;
        case 2:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary`}>BBB</p>;
        case 1:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary bg-opacity-70`}>BB</p>;
        case 0:
            return <p className={`text-xs rounded-full py-[2px] px-2 text-white w-max bg-secondary bg-opacity-50`}>B</p>;
    }

}