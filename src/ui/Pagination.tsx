import { Button } from "@nextui-org/react";
import { ArrowUp } from "lucide-react";

const Pagination = ({ page, total, setPage }: { page: number, total: number, setPage: (val: number) => void }) => {

    const itemsPerPage = 6;
    const totalPages = Math.ceil(total / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, total);
    return (
        <div className='flex items-center justify-between pt-5 px-4 sm:px-6'>
            <Button variant='bordered' radius='sm'
                onClick={() => setPage(page > 1 ? page - 1 : page)}>
                <p className='hidden sm:flex'>
                    Previous
                </p>
                <ArrowUp className='sm:hidden -rotate-90 text-text3 w-5' />
            </Button>
            <p className='text-base text-[#344054] font-semibold'>{page}/{totalPages} Sahifa</p>
            <Button variant='bordered' radius='sm'
                onClick={() => setPage(page < totalPages ? page + 1 : page)}>
                <p className='hidden sm:flex'>
                    Next
                </p>
                <ArrowUp className='sm:hidden rotate-90 text-text3 w-5' />
            </Button>
        </div>
    )
}

export default Pagination