import ArchivePage from '@/pages/Archives/Archive'

const Page = ({ params }: { params: { archive: string } }) => {
    return (
        <ArchivePage slug={params.archive} />
    )
}

export default Page