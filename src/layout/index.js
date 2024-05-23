import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

import LayoutWrapper from './style';

const Index = () => (
  <LayoutWrapper>
    <Header />
    <Outlet />
  </LayoutWrapper>
);

export default Index;
