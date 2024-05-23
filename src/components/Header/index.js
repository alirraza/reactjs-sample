import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

import HeaderWrapper from './style';
import { Logout } from '../../redux/slice/auth';

const headerMenu = [];

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [{
    label: 'Stores',
    key: 'stores'
  }, {
    label: 'Emails',
    key: 'emails'
  }, {
    label: 'Logout',
    key: 'logout'
  }];

  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      dispatch(Logout());
      navigate('/login');
    } else if (e.key === 'stores') {
      navigate('/stores');
    } else if (e.key === 'emails') {
      navigate('/emails');
    }
  };

  return (
    <HeaderWrapper>
      <div className="header-main">
        <div className="logo">
          ReactJs Sample
        </div>
        <nav className="header-menu">
          <ul>
            {headerMenu.map((menu) => (
              <li key={Date.now().toString(36) + Math.random().toString(36).slice(2)}>
                <NavLink
                  to={menu.to}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="menu-avatar">
            <Avatar size={50} icon={<UserOutlined />} />
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick
              }}
              trigger={['click']}
              placement="bottomRight"
            >
              <DownOutlined />
            </Dropdown>
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Index;
