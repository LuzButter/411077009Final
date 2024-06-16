import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import Home from './pages/Home'
import Search from './pages/Search'
import Layout from './component/Layout'
import Category from './pages/CategoryDistribution'
import AverageRating from './pages/AverageRating'
import PricingStrategy from './pages/PricingStrategy'
import SizePerformence from './pages/SizePerformence'

const root = () => {

  return (
    <ConfigProvider
      theme={{
        "token": {
          "colorPrimary": "#6d6a99",
          "colorInfo": "#6d6a99",
          "fontSize": '2vmin',
          "colorError": "#e58182",
          "colorWarning": "#ebc883",
          "colorSuccess": "#a1d986",
          "colorLink": "#a5a2cb",
          "colorTextBase": "#343434",
          "colorBgBase": "#ffffff",
          "borderRadius": 10,
          "wireframe": false
        }
      }}
    >
      <Router>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='Category' element={<Category/>} />
            <Route path='AverageRating' element={<AverageRating />} />
            <Route path='SizePerformence' element={<SizePerformence/>} />
            <Route path='PricingStrategy' element={<PricingStrategy/>} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  )
}

export default root;
