import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
const Mcuz = ({ info }: { info: any }) => {
    return (
        <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Toifa</TableColumn>
                <TableColumn>Xulosa raqami</TableColumn>
            </TableHeader>
            <TableBody>
                {info?.map((i: any) => (
                    <TableRow key={i?.id}>
                        <TableCell>{i?.id}</TableCell>
                        <TableCell>{i?.toifa}</TableCell>
                        <TableCell>{i?.xulosa_raqami}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Mcuz