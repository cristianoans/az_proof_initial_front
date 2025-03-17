import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from './Layout';

const ProtectedRoutes = () => {
  const { token } = useAuth();

  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;