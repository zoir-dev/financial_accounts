import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Agroinspeksiya = ({ info }: { info: any[] }) => {
    return (
        <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Model</TableColumn>
                <TableColumn>Nomi</TableColumn>
                <TableColumn>Raqami</TableColumn>
                <TableColumn>Chiqarilgan yil</TableColumn>
                <TableColumn>Jo&apos;natilgan sana</TableColumn>
            </TableHeader>
            <TableBody>
                {info?.map((i: any) => (
                    <TableRow key={i?.id}>
                        <TableCell>{i?.id}</TableCell>
                        <TableCell>{i?.texnik_modeli}</TableCell>
                        <TableCell>{i?.texnika_nomi}</TableCell>
                        <TableCell>{i?.number}</TableCell>
                        <TableCell>{i?.chiqarilgan_yil}</TableCell>
                        <TableCell>{i?.request_date?.slice(0, 10)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Agroinspeksiya