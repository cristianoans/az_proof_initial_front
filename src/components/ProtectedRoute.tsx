import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { token } = useAuth();
    return token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;