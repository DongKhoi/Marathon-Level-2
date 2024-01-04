import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

interface Product {
    id: number;
    productName: string;
    orderTotal: number;
    status: string;
}

interface TableComponentProps {
    data: Product[];
}

const TableDataComponent: React.FC<TableComponentProps> = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Tên sản phẩm</TableCell>
                    <TableCell>Tổng đơn hàng</TableCell>
                    <TableCell>Trạng thái</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
                {data.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.productName}</TableCell>
                        <TableCell>{product.orderTotal}</TableCell>
                        <TableCell>{product.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableDataComponent;