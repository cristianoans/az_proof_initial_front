// src/types/index.ts
import { ReactNode } from "react";

export interface Totals {
    quantityOrder: number;
    amountOrder: number;
    quantitySales: number;
    amountSales: number;
    averageTicket: number;
}

export interface Pagination {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
}

export interface Order {
    orderId: string;
    sellerId: string;
    createdAt: string;
    customerName: string;
    customerDoc: string;
    orderStatus: string;
    paymentStatus: string;
    paymentMethod: string;
    amount: string;
}

export interface DashboardData {
    totals: Totals;
    pagination: Pagination;
    ordersTableData: Order[];
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface CardData {
    image: string;
    label: string;
    value: number | string;
    isCurrency?: boolean;
}

export interface SidebarItem {
    label: string;
    path: string;
    icon: string;
}

export interface SidebarProps {
    items: SidebarItem[];
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterProps {
    links: FooterLink[];
}

export interface LayoutProps {
    children: ReactNode;
}

export interface UserProfile {
    name: string;
    email: string;
    id: string;
}

export interface LoginResponse {
    profile: {
        name: string;
    };
    email: string;
    token: string;
    id: string;
}

export interface AuthContextType {
    profile: UserProfile | null;
    token: string | null;
    login: (profile: UserProfile, token: string) => void;
    logout: () => void;
}