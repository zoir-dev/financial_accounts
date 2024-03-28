import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Sanoat = ({ info }: { info: any[] }) => {
    return (
        <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Nomer</TableColumn>
                <TableColumn>Sinf</TableColumn>
                <TableColumn>Turi</TableColumn>
                <TableColumn>Model</TableColumn>
                <TableColumn>Zavod</TableColumn>
                <TableColumn>Registiratsiya nomeri</TableColumn>
                <TableColumn>Jo&apos;natilgan sana</TableColumn>
            </TableHeader>
            <TableBody>
                {info?.map((i: any) => (
                    <TableRow key={i?.id}>
                        <TableCell>{i?.number}</TableCell>
                        <TableCell>{i?.class}</TableCell>
                        <TableCell>{i?.equiptype}</TableCell>
                        <TableCell>{i?.model}</TableCell>
                        <TableCell>{i?.zavod}</TableCell>
                        <TableCell>{i?.registration_number}</TableCell>
                        <TableCell>{i?.request_date?.slice(0, 10)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Sanoat