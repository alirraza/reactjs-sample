import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Layout = lazy(() => import('../layout'));

const PrivateRoutes = () => ({
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/', element: <Navigate to="summary" replace />
    }
  ]
});

export default PrivateRoutes;
