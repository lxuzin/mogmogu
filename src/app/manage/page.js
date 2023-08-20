"use client"
import React, { useEffect } from 'react';
import { Chart, LinearScale, CategoryScale } from 'chart.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

const data = [
  { 요일: '월', 지난주지출: 34000, 이번주지출: 32760 },
  { 요일: '화', 지난주지출: 56000, 이번주지출: 30000 },
  { 요일: '수', 지난주지출: 23000, 이번주지출: 27250 },
  { 요일: '목', 지난주지출: 49870, 이번주지출: 67000 },
  { 요일: '금', 지난주지출: 55000, 이번주지출: 51420 },
  { 요일: '토', 지난주지출: 60000, 이번주지출: 50000 },
  { 요일: '일', 지난주지출: 25000, 이번주지출: 28000 },
];

function Manage() {
  useEffect(() => {
    Chart.register(LinearScale, CategoryScale);
  }, []);


  const handleApi = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    try {
      const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `account`, options);
      if (!resp.ok) {
        throw new Error("Bad response", {
          cause: { resp }
        })
      }
      const transactions = await resp.json();
      console.log(transactions)
    } catch (e) {
      router.refresh();
    }
  }
  useEffect(() => {
    handleApi()
  }, [])

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
              <span style={{ float: 'right' }}> 286,430원 ▶️ </span>
            </p>
            <p>
              <span style={{ color: 'red', float: 'left' }}>지난주 대비 00.000원 🔼 </span>
              <span style={{ color: 'blue', float: 'right' }}>지난주 대비 16,440원 🔽</span>
            </p>
          </div>
        </div>
        <LineChart width={495} height={270} data={data} margin={{ top: 8, right: 30, left: 12, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="요일" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="지난주지출" stroke="#DFDFDF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="이번주지출" stroke="#C998DC" /></LineChart>
      </div>
      <hr />
      <div style={{ font: 'initial' }}>
        <p > | 이번 달 지출 금액</p>
        <p style={{ marginLeft: '4px' }}>◀️ 8월 ▶️</p>
        <p style={{ marginLeft: '5px', marginBottom: '15px' }}>
          <span>총 286,430원</span>
          <span style={{ fontSize: '2px', color: '#9950B7', marginLeft: '15px' }}>지난달 이맘때보다 4만 원 절약했어요! </span>
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
                    {key === '식당' && <span style={{ marginLeft: '90px' }}>140,000원 </span>}
                    {key === '카페' && <span style={{ marginLeft: '90px' }}>90,000원</span>}
                    {key === '취미여가' && <span style={{ marginLeft: '90px' }}>40,000원</span>}
                    {key === '기타' && <span style={{ marginLeft: '90px' }}>16,430원</span>}
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