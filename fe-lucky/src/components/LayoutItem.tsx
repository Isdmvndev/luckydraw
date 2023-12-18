import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import MenuItem from './MenuItem';
import { Outlet } from 'react-router-dom';
import BreadcrumbItem from './BreadcrumbItem';

const { Header, Content, Footer } = Layout;
const  items1=[
  {
    title: 'Home',
  },
  {
    title: <a href="">Application Center</a>,
  },
  {
    title: <a href="">Application List</a>,
  },
  {
    title: 'An Application',
  },
];
const LayoutItem: React.FC = () => (
  <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <MenuItem/>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px' }}>
     <BreadcrumbItem items={items1} />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Outlet/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);
export default LayoutItem
