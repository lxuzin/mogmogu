"use client"
import React, { useEffect, useState } from 'react';
import { default as axios } from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Bar, BarChart } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

function Manage() {
  const [lastWeekData, setLastWeekData] = useState([]);
  const [thisWeekData, setThisWeekData] = useState([]);
  const [selectedDayData, setSelectedDayData] = useState({});



  const handleApi = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'account');
      const transactions = response.data;

      const today = new Date();
      const lastWeekStart = new Date(today);
      lastWeekStart.setDate(today.getDate() - 13);
      const lastWeekEnd = new Date(today);
      lastWeekEnd.setDate(today.getDate() - 7);

      const thisWeekStart = new Date(today);
      thisWeekStart.setDate(today.getDate() - 6);

      const lastWeek = transactions.filter(item => {
        const date = new Date(item.date);
        return date >= lastWeekStart && date <= lastWeekEnd;
      });

      const thisWeek = transactions.filter(item => {
        const date = new Date(item.date);
        return date >= thisWeekStart && date <= today;
      });


      setLastWeekData(lastWeek);
      setThisWeekData(thisWeek);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  const generateWeekData = (start, end, transactions) => {
    const weekData = {};
  
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const day = date.toLocaleString('en-US', { weekday: 'short' });
      if (!weekData[day]) {
        const dayTransactions = transactions.filter(item => new Date(item.date).getDate() === date.getDate());
        weekData[day] = {
          cost: dayTransactions.reduce((total, transaction) => total + transaction.cost, 0),
        };
      } else {
        const dayTransactions = transactions.filter(item => new Date(item.date).getDate() === date.getDate());
        weekData[day].cost += dayTransactions.reduce((total, transaction) => total + transaction.cost, 0);
      }
    }
  
    return weekData;
  };

  const lastWeekChartData = generateWeekData('2023-08-06', '2023-08-13', lastWeekData);
  const thisWeekChartData = generateWeekData('2023-08-14', '2023-08-20', thisWeekData);
  
  const combinedChartData = Object.keys(lastWeekChartData).map(day => ({day,
    lastWeekCost: lastWeekChartData[day].cost,
    thisWeekCost: thisWeekChartData[day]?.cost || 0,
    lastWeekDifference: thisWeekChartData[day]?.cost - lastWeekChartData[day].cost || 0,
  }));

  const handleChartClick = (data, index) => {
    setSelectedDayData(combinedChartData[index]);
  };


  const lastWeekTotalExpenses = lastWeekData.reduce((total, transaction) => total + transaction.cost, 0);
  const thisWeekTotalExpenses = thisWeekData.reduce((total, transaction) => total + transaction.cost, 0);




  const boxStyle = {
    backgroundColor: 'rgba(201, 152, 220, 0.82)',
    width: '95%',
    height: '80px',
    borderRadius: '10px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const box = {
    font: 'initial',
    padding: '3px',
  };

  const bubbleStyle = {
    top: '150px',
    left: '120px',
    backgroundColor: 'white',
    width: '340px',
    height: '70px',
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: 'black',
    font: 'initial',
    marginLeft: '15px',
    marginTop: '10px'
  };

  const db = [
    { name: 'A', 식당: 50, 카페: 30, 취미여가: 10, 기타: 10 }
  ];

  const keys = ['식당', '카페', '취미여가', '기타'];

  const colors = ['#C998DC', '#9EDC98', '#98A7DC', '#DC9898'];

  const pieData = [
    { name: '목표 달성', value: 60 },
    { name: '미달성', value: 40 },
  ];

  const COLORS = ['#9319C3', '#FFFFFF'];

  const labelStyle = {
    fontSize: '12px',
    font: 'initial',
    fill: 'black'
  }

  

  return (
    <div>
      <div>
        <div>
          <h4 style={{ font: 'initial', padding: '7px', marginTop: '8px' }}> | 우리의 저축 및 절약 현황 보러가기</h4>
        </div>
        <div>
          <div style={boxStyle}>
            <div>
              <Link style={{ textDecoration: 'none' }} href="/manage/manage2" passHref>
                <div className="boxcontent" >
                  <div style={{ marginLeft: '20px', color: 'white', marginTop: '10px' }}>일주년 기념 여행💖</div>
                  <div style={{ marginLeft: '20px', color: 'white', marginTop: '5px' }}>23.08.17~23.08.31</div>
                  <div style={{ marginLeft: '20px', color: 'white', marginTop: '5px' }}>목표 금액까지 400,000원!</div>
                </div>
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <PieChart width={80} height={80} >
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={27}
                  outerRadius={30}
                  startAngle={90}
                  endAngle={-270}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  <Label
                    value={`${pieData[0].value}%`}
                    position="center"
                    style={labelStyle} />
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <img src='/ahrm.png' alt='' style={{ marginLeft: '10px', width: '100px', height: '100px' }}></img>
          <div style={bubbleStyle}>
            <p style={{ padding: '15px' }}>현재 목표 달성 확률은 60%입니다!
              <br /> 절약 목표 달성을 위해 달려보아요🏃🏃
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px', marginRight: '20px' }}>
          <div >
            <p style={{ font: 'caption' }}> 현재 우리의 저축 및 절약 현황이 궁금하다면 ? </p>
            <h4 style={{ textDecoration: 'underline', display: 'flex', justifyContent: 'flex-end' }}><Link href="/manage/spend"> 저축 및 절약 스케줄링 바로가기 ▶️ </Link></h4>
          </div>
        </div>
        <hr />
        <div >
          <div style={{ font: 'initial' }}>
            <p style={{ marginTop: '8px' }}>
              <span> | 일주일 지출 </span>
              <span style={{ marginLeft:'70%' }}> 지난주 대비 </span>
              <span style={{ float: 'right', color: (thisWeekTotalExpenses - lastWeekTotalExpenses) < 0 ? 'blue' : 'red' }}>
                {Math.abs(thisWeekTotalExpenses - lastWeekTotalExpenses).toLocaleString()} 원{' '}
                {thisWeekTotalExpenses - lastWeekTotalExpenses < 0 ? '🔽' : '🔼'}
              </span>
            </p>
          </div>
        </div>
        <LineChart width={495} height={270} data={combinedChartData} margin={{ top: 8, right: 30, left: 12, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis hide />
        <Tooltip />
        <Legend />
        <Line dataKey="lastWeekCost" name="Last Week" stroke="lightgray" onClick={handleChartClick}/>
        <Line dataKey="thisWeekCost" name="This Week" stroke="#C998DC" onClick={handleChartClick}/>
        </LineChart>
      </div>
      <hr />
      <div style={{ font: 'initial' }}>
        <p > | 이번 달 지출 금액</p>
        <p style={{ marginLeft: '4px' }}>◀️ 8월 ▶️</p>
        <p style={{ marginLeft: '5px', marginBottom: '15px' }}>
          <span>총 383,000원</span>
          <span style={{ fontSize: '2px', color: '#9950B7', marginLeft: '15px' }}>지난달 이맘때보다 95,300원 더 썼어요! </span>
        </p>
        <BarChart width={440} height={67} data={db} margin={{ top: 5, right: 20, bottom: 10 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" />
          <Tooltip />
          <Legend />
          {keys.map((key, index) => (
            <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />))}
        </BarChart>
        <div style={{ font: 'initial', padding: '25px', marginLeft: '110px' }}>
          <table>
            <tbody>
              {keys.map((key, index) => (
                <tr key={key}>
                  <td>
                    <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: colors[index] }}></span>
                  </td>
                  <td>
                    <span >{key}</span>
                    <td style={{ fontSize: 'small' }}>{db[0][key]}%</td>
                  </td>
                  <td>
                    {key === '식당' && <span style={{ marginLeft: '90px' }}>191,500원 </span>}
                    {key === '카페' && <span style={{ marginLeft: '90px' }}>114,900원</span>}
                    {key === '취미여가' && <span style={{ marginLeft: '90px' }}>38,300원</span>}
                    {key === '기타' && <span style={{ marginLeft: '90px' }}>38,300원</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
export default Manage;