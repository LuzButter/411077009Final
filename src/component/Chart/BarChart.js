import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import data from '../Data/Rating.json'
const DemoColumn = () => {
  // const data = [
  //   {
  //     action: '浏览网站',
  //     pv: 50000,
  //   },
  //   {
  //     action: '放入购物车',
  //     pv: 35000,
  //   },
  //   {
  //     action: '生成订单',
  //     pv: 25000,
  //   },
  //   {
  //     action: '支付订单',
  //     pv: 15000,
  //   },
  //   {
  //     action: '完成交易',
  //     pv: 8500,
  //   },
  // ];
  const config = {
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'action',
    yField: 'pv',
    // conversionTag: { visible: true },
  };
  return <Column {...config} />;
};
export default DemoColumn;
