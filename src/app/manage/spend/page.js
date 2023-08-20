"use client"
import React, { useState, useEffect } from 'react';
import { Chart, LinearScale, CategoryScale } from 'chart.js';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
    BarChart
} from 'recharts';
import axios from 'axios';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];


const Spend = () => {
    const [lastWeekData, setLastWeekData] = useState([]);
    const [thisWeekData, setThisWeekData] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    const lastWeekTotal = lastWeekData.reduce((total, transaction) => total + transaction.cost, 0);
    const thisWeekTotal = thisWeekData.reduce((total, transaction) => total + transaction.cost, 0);
    const difference = thisWeekTotal - lastWeekTotal;

    const handleDayClick = (day) => {
        // 선택한 요일에 해당하는 내역을 가져오는 로직 작성
        const selectedData = thisWeekData.filter(item => {
            const date = new Date(item.date);
            return date.getDay() === daysOfWeek.indexOf(day);
        });
    
        setSelectedDay(day);
        setSelectedTransactions(selectedData);
    };

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
    
          const lastWeekTotalExpenses = lastWeekTotal; // 수정된 부분
    
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
        const selectedData = selectedTransactions; // 이미 상태로 가지고 있는 데이터
        
        // 선택한 주 데이터로부터 이번 주의 총 금액과 차액 계산
        const selectedWeekTotal = selectedData.reduce((total, transaction) => total + transaction.thisWeekCost, 0);
        const selectedWeekDifference = selectedData.reduce((total, transaction) => total + transaction.lastWeekDifference, 0);
        
        // 상태 업데이트
        setThisWeekTotal(selectedWeekTotal);
        setDifference(selectedWeekDifference);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '1%', marginTop: '44%', position: 'absolute', zIndex: '9999' }}>
                {daysOfWeek.map(day => (
                    <button
                        key={day}
                        onClick={() => {
                            handleDayClick(day);
                            console.log(day);
                        }}
                        style={{
                            backgroundColor: 'rgba(246, 246, 246, 0)',//'rgba(246, 246, 246, 0)'
                            border: 'none',
                            padding: '6px 20px',
                            display: 'block',
                            cursor: 'pointer',
                            height: '30px',
                        }}
                    >
                    </button>
                    
                ))}
            </div>
            <div style={{marginTop:'12px', marginLeft:'12px'}}>
               <img src="../images/back.png" />
            </div>
            <div style={{margin:'15px'}}>
                <p style={{font:'initial'}}> | 일주일 지출 </p>
                <LineChart width={495} height={270} data={combinedChartData} margin={{ top: 8, right: 30, left: 12, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis hide />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="lastWeekCost" name="Last Week" stroke="lightgray" onClick={(data, index) => handleChartClick(data, index)} />
    <Line dataKey="thisWeekCost" name="This Week" stroke="#C998DC" onClick={(data, index) => handleChartClick(data, index)} />
                    </LineChart>
                <hr/>
            </div>
            <div style={{margin:'18px'}}>
                <p> {thisWeekTotal.toLocaleString()}원 </p>
                <p style={{color:'blue', font:'initial', marginBottom:'10px'}}>
                    지난주 대비 {difference.toLocaleString()}원 
                    {difference >= 0 ? '🔼' : '🔽'} </p>
                <hr/>
            </div>
            <div style={{margin:'20px'}}>
                <h3> 
                    <span>상세내역</span>
                </h3>
            </div>
            <hr/>
            <div>
                {selectedTransactions.map((transaction, index) => (
                    <div key={index}>
                        <div style={{
                            display: 'flex',
                            marginLeft: '5%', 
                            marginTop: '2%',
                            marginBottom: '2%',
                            marginRight: '2%',
                            justifyContent: 'space-between'
                        }}>
                        <p>{transaction.name}</p>
                        <p>{transaction.cost}원</p>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Spend;