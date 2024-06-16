import { useNavigate, Outlet } from "react-router-dom"
import styled from "styled-components"
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SearchOutlined,
    LineChartOutlined,
    PieChartOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const Styled = styled.div`
.ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.ant-layout-sider-children{
    width: inherit;
}
`
const { Header, Sider, Content } = Layout;

const App = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Styled>
            <Layout style={{ height: '100dvh' }} >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['home']}
                        onClick={e => {
                            console.log(e)
                            navigate(`/${e.key}`)
                        }}
                        items={[
                            {
                                key: 'home',
                                icon: <HomeOutlined />,
                                label: '首頁',
                            },
                            {
                                key: 'Category',
                                icon: <PieChartOutlined />,
                                label: '類型分布',
                            },
                            {
                                key: 'AverageRating',
                                icon: <BarChartOutlined />,
                                label: '評價分布',
                            },
                            {
                                key: 'SizePerformence',
                                icon: <LineChartOutlined />,
                                label: '容量vs評價',
                            },
                            {
                                key: 'PricingStrategy',
                                icon: <LineChartOutlined />,
                                label: '價錢vs評價',
                            },
                        ]}
                    />
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={'0'}
                        onClick={() => setCollapsed(!collapsed)}
                        items={[
                            {
                                key: '1',
                                icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
                                // label: '首頁',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            height: '100dvh',
                            overflowY: 'scroll'
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Styled>
    );
};
export default App;