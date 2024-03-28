import AddArchivePage from '@/pages/Archives/Archive/AddPage'

const Add = ({ params }: { params: { archive: string } }) => {
    return (
        <AddArchivePage slug={params.archive} />
    )
}

export default Add