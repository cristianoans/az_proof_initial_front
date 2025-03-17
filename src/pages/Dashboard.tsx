import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/api';
import TotalsSummary from '../components/TotalsSummary';
import DashboardTable from '../components/DashboardTable';
import PaginationControls from '../components/PaginationControls';
import ordersImg from '../assets/orders.svg';
import salesImg from '../assets/sales.svg';
import avarageImg from '../assets/avarage.svg';
import { CardData, DashboardData, Order } from '../types';
import { orderStatusMap, paymentStatusMap, paymentMethodMap, translateValue, formatDateBR, formatCustomerName } from '../utils/translations';

const Dashboard = () => {
    const [data, setData] = useState<DashboardData>({
        totals: {
            quantityOrder: 0,
            amountOrder: 0,
            quantitySales: 0,
            amountSales: 0,
            averageTicket: 0,
        },
        pagination: {
            totalItems: 0,
            totalPages: 0,
            currentPage: 1,
            itemsPerPage: 6,
        },
        ordersTableData: [],
    });

    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchDashboardData(page, itemsPerPage);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        loadData();
    }, [page, itemsPerPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= data.pagination.totalPages) {
            setPage(newPage);
        }
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setPage(1);
    };

    const cardData: CardData[] = [
        {
            image: ordersImg,
            label: `${data.totals.quantityOrder} Pedidos`,
            value: data.totals.amountOrder,
            isCurrency: true,
        },
        {
            image: salesImg,
            label: `${data.totals.quantitySales} Vendas`,
            value: data.totals.amountSales,
            isCurrency: true,
        },
        {
            image: avarageImg,
            label: 'Ticket médio',
            value: data.totals.averageTicket,
            isCurrency: true,
        },
    ];

    // Pré-processamento dos dados da tabela
    const processedOrders = data.ordersTableData.map((order: Order) => ({
        ...order,
        createdAt: formatDateBR(String(order.createdAt)),
        customerName: formatCustomerName(String(order.customerName)),
        orderStatus: translateValue(String(order.orderStatus), orderStatusMap),
        paymentStatus: translateValue(String(order.paymentStatus), paymentStatusMap),
        paymentMethod: translateValue(String(order.paymentMethod), paymentMethodMap),
        amount: `R$ ${Number(order.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
    }));

    return (
        <div className="dashboard">
            <div className="title my-5">Resumo dos pedidos</div>
            <div className="my-5">
                <TotalsSummary cardData={cardData} />
            </div>
            <DashboardTable orders={processedOrders} />
            <PaginationControls
                totalItems={data.pagination.totalItems}
                itemsPerPage={data.pagination.itemsPerPage}
                currentPage={data.pagination.currentPage}
                totalPages={data.pagination.totalPages}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
            />
        </div>
    );
};

export default Dashboard;