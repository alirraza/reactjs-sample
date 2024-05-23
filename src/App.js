import React, { Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/global-styles';
import theme from './theme/theme-variables';

import { SetAuthToken } from './config/axios-configuration';

import './App.css';

import PrivateRoutes from './routes/private-route';
import PublicRoutes from './routes/public-route';

const App = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      SetAuthToken(token);
    } else {
      SetAuthToken(null);
    }
  }, [token, dispatch]);

  const router = createBrowserRouter([
    token ? PrivateRoutes() : {},
    PublicRoutes()
  ]);

  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'Source Sans 3'
            }
          }}
        >
          <GlobalStyles />
          <RouterProvider router={router} />
        </ConfigProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
