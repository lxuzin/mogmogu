'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import {Label} from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

export default function Manage2(props) {
  const router = useRouter();
  const [saveElementsData, setSaveElementsData] = useState([]);
  const [showSaveDetails1, setShowSaveDetails1] = useState(false);
  const [showSaveDetails2, setShowSaveDetails2] = useState(false);

  const handleToggleSaveDetails1 = () => {
    setShowSaveDetails1(!showSaveDetails1);
  };

  const handleToggleSaveDetails2 = () => {
    setShowSaveDetails2(!showSaveDetails2);
  };

  const handleAddSaveClick = () => {
    setSaveElementsData([
      ...saveElementsData,
      { cost: '', subject: '', date: '' }
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSaveElementsData = [...saveElementsData];
    
    if (updatedSaveElementsData[index]) {
      updatedSaveElementsData[index][field] = value;
      setSaveElementsData(updatedSaveElementsData);
    }
  };

  const handleSaveCost = (index) => {
    const cost = saveElementsData[index]?.cost;
    if (cost !== undefined) {
      console.log('저장된 비용:', cost);
    }
  };

  const pieData = [
    { name: '목표 달성', value: 60 },
    { name: '미달성', value: 40 },
  ];

  const COLORS = ['#9319C3', '#FFFFFF'];

  const labelStyle = {
    fontSize:'12px',
    font:'initial',
    fill:'black'
  }

  const saveElements = saveElementsData.map((saveData, index) => (
    <div key={index} style={{ marginBottom: '-3%' }}>
      <div style={{ display: 'flex', width: '90%', marginLeft: '5%'}}>
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{fontSize: '12px', textAlign: 'center'}}>
              <textarea
                type="text"
                placeholder="00,000원 저축"
                style={{
                  marginTop: '20%',
                  width: '100%',
                  height: '100%',
                  fontSize: '10px',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'center',
                  resize: 'none'
                }}
                value={saveData.cost}
                onChange={(e) => handleInputChange(index, 'cost', e.target.value)}
            /></span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{fontSize: '12px', color: "#C08CD4", textAlign: 'center'}}>|</span>
          </div>
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{fontSize: '12px', textAlign: 'center'}}>
              <textarea
                type="text"
                placeholder="공동"
                style={{
                  marginTop: '20%',
                  width: '100%',
                  height: '100%',
                  fontSize: '10px',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'center',
                  resize: 'none'
                }}
                value={saveData.subject}
                onChange={(e) => handleInputChange(index, 'subject', e.target.value)}
            /></span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{fontSize: '12px', color: "#C08CD4", textAlign: 'center'}}>|</span>
          </div>
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{fontSize: '12px', textAlign: 'center'}}>
              <textarea
                type="text"
                placeholder="23.08.12"
                style={{
                  marginTop: '20%',
                  width: '100%',
                  height: '100%',
                  fontSize: '10px',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'center',
                  resize: 'none'
                }}
                value={saveData.date}
                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
            /></span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '5%', marginTop: "1%", border: 'none'}}
              onClick={handleSaveCost}>
              <img src="../images/edit.png"/>
            </button>
          </div>
        </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <button className="backBtn" type="submit" onClick={() => router.push("/manage")}>
          <img src="../images/back.png" />
        </button>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <div className="box-container">
          <div className="box"
            style={{
              backgroundColor: "#A869C1",
              border: "2px solid #550077",
              width: '90%',
              height: '80px',
              borderRadius: '10px',
              marginTop: '10px',
            }}>
            <div className="content-left">
              <div className="boxcontent">
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white'}}>일주년 기념 여행💖</div>
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '0.5%' }}>23.08.17~23.08.31</div>
                <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
              </div>
            </div>
            <div className="content-right">
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
                          value={`${pieData[0].value}%`} // 데이터 값 표시
                          position="center"
                          style={labelStyle}/>
                    </Pie>
                  </PieChart>
              </div> 
            </div>    
          </div>
          <div className="box-container">
          <div className="box"
            style={{
              backgroundColor: "#C08CD4",
              border: "2px solid #550077",
              width: '90%',
              height: '80px',
              borderRadius: '10px',
              marginTop: '10px',
            }}>
            <div className="content-left">
              <div className="boxcontent">
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white'}}>일주년 기념 여행💖</div>
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '0.5%' }}>23.08.17~23.08.31</div>
                <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
              </div>
            </div>
            <div className="content-right">
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
                          value={`${pieData[0].value}%`} // 데이터 값 표시
                          position="center"
                          style={labelStyle}/>
                    </Pie>
                  </PieChart>
              </div> 
            </div>    
          </div>
          </div>
          <div className="box-container" style={{marginLeft: "30%"}}>
            <div className="button-row">
              <button className="addBtn" style={{
              fontWeight: "bold",
              color: "white",
              marginRight: "auto"
              }} onClick={() => router.push("/manage/manage2/add")}>
              이벤트 추가하기
              </button>
              <button className="editBtn" style={{
              fontWeight: "bold",
              color: "white",
              marginRight: "7%"
              }} onClick={() => router.push("/manage/manage2/edit")}>
              편집
              </button>
            </div>
          </div>
          <div className="box-container">
            <div className="middle"></div>
          </div>
          <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 우리의 지출 관리 현황</span>
          <div className="box-container">
            <div className="boxcontent">
              <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '2%' }}>일주년 기념 여행💖</div>
              <div style={{ fontSize: '13px', marginLeft: "5%",  color: 'gray', marginTop: '0.5%' }}> 지출 관리 기간 : 23.08.17~23.08.31</div>
              <div style={{ fontSize: '13px', marginLeft: "5%",  color: 'gray', marginTop: '0.5%' }}> 필요한 금액 : 1,000,000원</div>
              <div style={{ fontSize: '10px', marginLeft: "5%",  color: '#A869C1', marginTop: '0.5%' }}>목표 금액까지 400.000원!</div>
            </div>
          </div>
          <div className="box-container" style={{ marginTop: '10%' }}>
            <span style={{color: 'white'}}>지금까지 600,000원 모였어요</span>
            <div className="heart-container">
              <span className="heart-text" style={{marginTop: '10%'}}>절약 60%</span>
              <span className="heart-text" style={{marginTop: '35%'}}>(600,000)</span>
              <img src="../images/heart_40.png" className="heart-image" />
            </div>
            <div className="boxcontent"></div>
          </div>
          <div className="bear-container">
            <img src="../images/hungry_bear.png" style={{marginLeft: '5%'}}/>
            <div className="bearbox" style={{backgroundColor: 'white', width: '50%', marginLeft: '5%'}}>
            <div className="boxcontent" style={{textAlign: 'center'}}>
              <div style={{ fontSize: '10px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '6%' }}>현재 목표 달성 확률은 <sapn style={{color: '#A869C1'}}>70%</sapn>입니다!</div>
              <div style={{ fontSize: '10px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '2%' }}>이벤트 목표 달성을 위해 달려보아요.🏃‍♀️🏃‍♀️</div>
            </div>
            </div>
          </div>
          <div className="button-container" style={{marginTop: '3%'}}>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '5%', marginTop: "1%", border: 'none', marginBottom:"2%"}} onClick={handleToggleSaveDetails1}>
              <span style={{fontSize: '15px',color: "black", fontWeight: 'bold'}}>저축</span>
            </button>
            <span style={{color: "black", fontWeight: 'bold', marginBottom:"2%"}}>|</span>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '0%', marginTop: "1%", border: 'none', marginBottom:"2%"}} onClick={handleToggleSaveDetails2}>
              <span style={{fontSize: '15px',color: "black", fontWeight: 'bold'}}>절약</span>
            </button>
          </div>
          {showSaveDetails1 && (
            <div>
              <button type="submit" style={{backgroundColor: 'white', width: '50%', marginTop: "3%", border: 'none', marginLeft:"-5%"}}>
                <span style={{fontSize: '10px',color: "black"}}>▷ 저축한 금액 : 총 00,000원</span>
              </button>
              <div style={{marginTop: "3%"}}>
                <span style={{color: "#A869C1", marginLeft: "7%", marginTop: "3%"}}>
                  내역
                </span>
              </div>
              {saveElements}
              <div className="box-container"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className="addBtn" style={{
                  fontWeight: "bold",
                  color: "white",
                  marginTop: "5%",
                  marginBottom: "10%"
                  }}
                  onClick={handleAddSaveClick}>
                  추가하기
                </button>
              </div>
            </div>
          )}
          {showSaveDetails2 && (
            <div>
                <span style={{fontSize: '10px',color: "black", marginLeft: '6%', marginTop:'10%'}}>▷ 절약한 금액 : 총 00,000원</span>
            </div>
          )}

        <style jsx>
          {`
            .container {
            background-color: white;
            display: flex;
            flex-direction: column;
          }

          .box-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .middle{
            width: 100%;
            margin-top: 1%;
            height: 10px;
            background-color: #F6F6F6;
          }

          .box {
            width: 100%;
            border: 0.5px solid #550077;
            margin-top: 20px;
            border-radius: 10px;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .boxcontent {
            marginTop: 5px;
            marginLeft: 5px;
            width: 100%;
            height: 100%;
            fontSize: 10px;
            border: none;
            outline: none;
            color: #633277;
            verticalAlign: middle;
            background: transparent;
            resize: none
          }

          .content-left {
            width: 70%;
          }
      
          .content-right {
            width: 30%;
            display: flex;
            justify-content: flex-end;
          }

          .backBtn {
            background-color: white;
            width: calc(50% - 200px);
            height: 5vh;
            border: none;
          }

          .button-row {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 3%
          }

          .addBtn {
            background-color: rgba(203, 161, 220, 0.57);
            width: 150px;
            height: 20px;
            border: 1px solid #ffffff;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
          }

          .editBtn {
            background-color: rgba(203, 161, 220, 0.57);
            width: 50px;
            height: 20px;
            border: 1px solid #ffffff;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
          }

          .bear-container {
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-left: 5%;
          }

          .bearbox {
            width: 30%;
            border: 0.5px solid #550077;
            background-color: #A869C1;
            border-radius: 10px;
            height: 60px;
          }

          .button-container {
            display: flex;
            align-items: center;
          }

          .heart-container {
            position: sticky;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .heart-text {
            text-align: center;
            color: white;
            font-size: 13px;
            position: absolute;
            z-index: 1;
          }
      
          .heart-image {
            position: relative;
            z-index: 0;
          }
          `}
        </style>
    </>
  );
}