import Link from "next/link"

const Row = ({ d }: { d: any }) => {
    return (
        <div className='flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b-1 border-default-200'>
            <div className="flex items-center w-full">
                <Link href={'/archives/' + d?.organization?.stir} className="hover:text-primary">
                    <p className="text-sm font-semibold">{d?.organization?.name}</p>
                </Link>
            </div>
            <div className="text-center w-full flex items-center justify-between gap-4">
                <p className='min-w-8 text-left text-[13px] text-gray-600'>{d?.organization?.region?.name}</p>
                <div className="w-[45px]">
                    {d?.reyting && <p className={`text-[13px] w-max text-white rounded-full py-[2px] px-2 text-xs ${getColor(d?.reyting)}`}
                    >
                        {d?.reyting}
                    </p>}
                </div>
            </div>
        </div>
    )
}

export default Row


const getColor = (rating: string) => {
    if (rating === 'AAA') {
        return 'bg-success-600'
    } else if (rating === 'AA') {
        return 'bg-success-400'
    } else if (rating === 'A') {
        return 'bg-success-200'
    } else if (rating === 'BBB') {
        return 'bg-[#53389E]'
    } else if (rating === 'BB') {
        return 'bg-[#7F56D9]'
    } else if (rating === 'B') {
        return 'bg-[#B692F9]'
    } else if (rating === 'CCC') {
        return 'bg-blue-700'
    } else if (rating === 'CC') {
        return 'bg-blue-500'
    } else if (rating === 'C') {
        return 'bg-blue-300'
    } else if (rating.length === 3) {
        return 'bg-violet-600'
    } else if (rating.length === 2) {
        return 'bg-violet-400'
    } else if (rating.length === 1) {
        return 'bg-violet-200'
    }

}