import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { IdcardOutlined, RedditOutlined } from './icons';
import type { MenuProps } from './components';
import { Layout, Menu } from './components';
import { useDocumentTitle } from './common';

import './App.css';
import './index.css';
import { HomeScreen } from './modules/home/screens';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem =>
  ({
    key,
    icon,
    children,
    label,
  } as MenuItem);

const items: MenuItem[] = [
  getItem('Customer needs', '/customer-needs', <RedditOutlined />),
  getItem('Jobs', '/jobs', <IdcardOutlined />),
];

const App: React.FC = () => {
  useDocumentTitle();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path="" element={<HomeScreen/>}/> 
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;