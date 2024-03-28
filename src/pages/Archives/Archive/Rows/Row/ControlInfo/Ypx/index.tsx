import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Ypx = ({ info }: { info: any[] }) => {
    return (
        <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Nomer</TableColumn>
                <TableColumn>Platforma nomeri</TableColumn>
                <TableColumn>Tex passport seriyasi</TableColumn>
                <TableColumn>Tex passport nomeri</TableColumn>
                <TableColumn>Jo&apos;natilgan sana</TableColumn>
            </TableHeader>
            <TableBody>
                {info?.map((i: any) => (
                    <TableRow key={i?.id}>
                        <TableCell>{i?.pVehicleId}</TableCell>
                        <TableCell>{i?.number}</TableCell>
                        <TableCell>{i?.pPlateNumber}</TableCell>
                        <TableCell>{i?.pTexpassportSery}</TableCell>
                        <TableCell>{i?.pTexpassportNumber}</TableCell>
                        <TableCell>{i?.request_date?.slice(0, 10)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Ypx