import { memo } from 'react';
import { Order } from '../types';

const DashboardTable = memo(({ orders }: { orders: Order[] }) => {
    const columns = [
        { header: 'ID do \r\n Pedido', accessor: 'orderId' },
        { header: 'ID na Loja', accessor: 'sellerId' },
        { header: 'Criação', accessor: 'createdAt' },
        { header: 'Nome do Cliente', accessor: 'customerName' },
        { header: 'CPF/CNPJ do cliente', accessor: 'customerDoc' },
        { header: 'Status do Pedido', accessor: 'orderStatus' },
        { header: 'Status do Pagamento', accessor: 'paymentStatus' },
        { header: 'Método de Pagamento', accessor: 'paymentMethod' },
        { header: 'Total', accessor: 'amount' },
    ];

    return (
        <div className="dashboard-table">
            <table className="table table-custom table-striped-columns mb-0">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.accessor}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            {columns.map((column) => (
                                <td
                                    key={column.accessor}
                                    id={column.accessor}
                                    data-column={column.accessor}
                                    data-fullname={
                                        column.accessor === 'customerName'
                                            ? String(order[column.accessor as keyof Order])
                                            : undefined
                                    }
                                >
                                    {order[column.accessor as keyof Order]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default DashboardTable;