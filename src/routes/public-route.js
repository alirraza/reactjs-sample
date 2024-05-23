import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ForgotPassword = lazy(() => import('../pages/Auth/component/ForgotPassword'));
const Login = lazy(() => import('../pages/Auth/component/Login'));
const PageNotFound = lazy(() => import('../pages/NotFound'));
const Register = lazy(() => import('../pages/Auth/component/Register'));
const ResetPassword = lazy(() => import('../pages/Auth/component/ResetPassword'));

const PublicRoutes = () => ({
  path: '/',
  children: [
    {
      path: '/', element: <Navigate to="login" replace />
    },
    {
      path: 'login', element: <Login />
    },
    {
      path: 'register', element: <Register />
    },
    {
      path: 'forgot-password', element: <ForgotPassword />
    },
    {
      path: 'reset-password', element: <ResetPassword />
    },
    {
      path: '*', element: <PageNotFound />
    }
  ]
});

export default PublicRoutes;
