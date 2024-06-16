import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';
import data from '../Data/SizeVSRating.json'

const DemoScatter = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/basement_prod/7a78a36d-c97c-459d-9090-9e664cd17167.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };

  const config = {
    data,
    xField: 'Size',
    yField: 'Rating',
    colorField: 'Genre',
    color: [
      '#d62728',
      '#2ca02c',
      '#000000',
      '#9467bd',
      '#ffd500',
      '#1f77b4',
      '#00518a',
      '#ffbc69',
      '#9bd646',
    ],
    pointStyle: {
      fillOpacity: 1,
    },
    xAxis: {
      visible: true,
      min: -5,
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
