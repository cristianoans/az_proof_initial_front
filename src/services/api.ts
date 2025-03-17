import axios from 'axios';
import { DashboardData, LoginCredentials, LoginResponse } from '../types';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchDashboardData = (page: number, limit: number) =>
    api.get<DashboardData>(`/proof/dashboard?page=${page}&limit=${limit}`);

export const loginUser = (credentials: LoginCredentials) =>
    api.post<LoginResponse>('/proof/session', credentials);