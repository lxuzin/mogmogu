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


const data = [
    { 요일: '월', 지난주지출: 34000, 이번주지출: 32760 },
    { 요일: '화', 지난주지출: 56000, 이번주지출: 30000 },
    { 요일: '수', 지난주지출: 23000, 이번주지출: 27250 },
    { 요일: '목', 지난주지출: 49870, 이번주지출: 67000 },
    { 요일: '금', 지난주지출: 55000, 이번주지출: 51420 },
    { 요일: '토', 지난주지출: 60000, 이번주지출: 50000 },
    { 요일: '일', 지난주지출: 25000, 이번주지출: 28000 },
];

const detailedData = {
    '화': [
        { category: '노랑통닭 건대점', amount: 23000 },
        { category: 'GS25 뚝섬유원지점', amount: 7000 }
    ]
};




const Spend = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedDetails, setSelectedDetails] = useState([]);

    useEffect(() => {
        Chart.register(LinearScale, CategoryScale);
    }, []);

    function handleDayClick(day) {
        setSelectedDay(day);
        setSelectedDetails(detailedData[day] || []);
    };



    return (
        <div>
            <div style={{marginTop:'12px', marginLeft:'12px'}}>
               <img src="../images/back.png" />
            </div>
            <div style={{margin:'15px'}}>
                <p style={{font:'initial'}}> | 일주일 지출 </p>
                <LineChart width={470} height={270} data={data} margin={{ top: 8, right: 30, left: 12, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" /> 
                    <XAxis dataKey="요일" onClick={(event) => { const dataIndex = event.activeTooltipIndex !== undefined ? event.activeTooltipIndex : event.index;const clickedDay = data[dataIndex]?.요일;if (clickedDay) {handleDayClick(clickedDay);}}}/>
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '5px',}}
                            labelStyle={{ fontWeight: 'bold' }}
                            formatter={(value, name) => [value, '금액']}/>
                    <Legend />
                    <Line type="monotone" dataKey="지난주지출" stroke="#DFDFDF" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="이번주지출" stroke="#C998DC" />
                </LineChart>
                <hr/>
            </div>
            <div style={{margin:'18px'}}>
                <p> 30,000원 </p>
                <p style={{color:'blue', font:'initial', marginBottom:'10px'}}> 지난주 대비 26,000원 🔽 </p>
                <hr/>
            </div>
            <div style={{margin:'20px'}}>
                <h3> 
                    <span>상세내역</span>
                    {selectedDay && <span style={{marginLeft:'370px', fontSize:'small'}}>{selectedDay} </span>}
                </h3>
                {selectedDetails.length > 0 ? (
                selectedDetails.map((detail, index) => (
                    <h4 key={index} style={{ margin: '10px' }}>
                        <span style={{ display: 'inline-block', width: '28px', height: '25px' }}>
                            {detail.category === '노랑통닭 건대점' && <img src="/shfkd.jpeg" alt='' style={{ width: '20px', height: '20px', marginRight: '5px'}} />}
                            {detail.category === 'GS25 뚝섬유원지점' && <img src="/gs.jpeg" alt='' style={{ width: '20px', height: '20px', marginRight: '5px'}} />}
                        </span>
                        <span>{detail.category}</span>
                        <span style={{ marginLeft:'400px' }}>{detail.amount}</span>
                    </h4>
                ))
            ) : (
                <p style={{ font: 'initial', fontSize: 'small', textAlign: 'center', marginTop: '60px', color: 'lightgray' }}>
                    {selectedDay ? '해당 요일의 상세내역이 없습니다.' : '클릭한 요일의 상세내역이 표시됩니다.'}
                </p>
            )}
            </div>
        </div>
    );
};

export default Spend;