import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import axios from 'axios';
import data from'../Data/Category.json'

// const data = [
//   { type: '分类一', value: 27 },
//   { type: '分类二', value: 25 },
//   { type: '分类三', value: 18 },
//   { type: '分类四', value: 15 },
//   { type: '分类五', value: 10 },
//   { type: '其他', value: 5 },
// ];
const DemoPie = () => {

  // const [categoryDistribution, setCategoryDistribution] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/category_distribution')
  //     .then(response => {
  //       // 假設從API返回的數據為{ "Category 1": 27, "Category 2": 25, ... }
  //       const rawData = response.data;
  //       const formattedData = Object.keys(rawData).map(key => ({
  //         type: key,
  //         value: rawData[key]
  //       }));
  //       setCategoryDistribution(formattedData);
  //       console.log(formattedData)
  //     })
  //     .catch(error => {
  //       console.error("There was an error fetching the category distribution data!", error);
  //     });
  // }, []);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    // startAngle: Math.PI,
    // endAngle: Math.PI * 2,
    radius: 0.8,
    label: {
      text: (d) => `${d.type}\n ${d.value}`,
      position: 'spider',
    },
    legend: {
      color: {
        title: false,
        position: 'bottom',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

// ReactDOM.render(<DemoPie />, document.getElementById('container'));

export default DemoPie
