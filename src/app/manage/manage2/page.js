'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { MarginRounded } from '@mui/icons-material';

export default function Manage2(props) {
  const router = useRouter();
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const boxElements = Array.from({ length: boxCount }, (_, index) => (
    <div
      key={index}
      className="box"
      style={{
        backgroundColor: index % 2 === 0 ? "#C08CD4" : "#A869C1" ,
        border: "2px solid #550077",
        width: '90%',
        height: '80px',
        borderRadius: '10px',
        marginTop: '10px',
      }}>
        <div className="boxcontent">
        <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '1%' }}>1주년 기념 여행♥</div>
        <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '1%' }}>23.08.17~23.08.31</div>
        <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '1%' }}>목표 금액까지 00.000원!</div>
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
        {/* <div className="box-container">{boxElements}</div> */}
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
            <div className="boxcontent">
              <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '2%' }}>일주년 기념 여행💖</div>
              <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '0.5%' }}>23.08.17~23.08.31</div>
              <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
            </div>
          </div>
            <div className="box"
              style={{
                backgroundColor: "#C08CD4",
                border: "2px solid #550077",
                width: '90%',
                height: '80px',
                borderRadius: '10px',
                marginTop: '10px',
              }}>
              <div className="boxcontent">
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '2%' }}>일본 여행 갑시다😊</div>
                <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '0.5%' }}>23.08.17~23.12.14</div>
                <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
                
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
              <div style={{ fontSize: '13px', marginLeft: "5%",  color: 'gray', marginTop: '0.5%' }}> 필요한 금액 : 000,000원</div>
              <div style={{ fontSize: '10px', marginLeft: "5%",  color: '#A869C1', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
            </div>
          </div>
          <div className="box-container" style={{ marginTop: '10%' }}>
            <div className="heart-container">
              <span className="heart-text" style={{marginTop: '-45%'}}>절약 40% (00,000)</span>
              <span className="heart-text" style={{marginTop: '10%'}}>절약 60%</span>
              <span className="heart-text" style={{marginTop: '35%'}}>(00,000)</span>
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
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '5%', marginTop: "1%", border: 'none'}}><sapn style={{fontSize: '15px',color: "black", fontWeight: 'bold'}}>저축</sapn></button>
            <sapn style={{color: "black", fontWeight: 'bold'}}>|</sapn>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '0%', marginTop: "1%", border: 'none'}}><sapn style={{fontSize: '15px',color: "black", fontWeight: 'bold'}}>절약</sapn></button>
          </div>
          <div>
            <button type="submit" style={{backgroundColor: 'white', width: '50%', marginTop: "3%", border: 'none'}}><sapn style={{fontSize: '10x',color: "black", textAlign: ''}}>▷ 저축한 금액 : 총 00,000원</sapn></button>
          </div>
          <span style={{color: "#A869C1", marginLeft: "5%", marginTop: "3%"}}>내역</span>
          <div style={{fontSize: '12px', width: '100%', marginLeft: '5%', marginTop: "3%"}}>
            <span style={{fontSize: '12px', width: '100%'}}>00,000원 저축</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%', color: "#C08CD4", fontWeight: 'bold'}}>|</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%'}}>공동</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%', color: "#C08CD4", fontWeight: 'bold'}}>|</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%'}}>23.08.12</span>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '5%', marginTop: "1%", border: 'none'}}>
              <img src="../images/edit.png"/>
            </button>
          </div>
          <div style={{fontSize: '12px', width: '100%', marginLeft: '5%', marginTop: "3%"}}>
            <span style={{fontSize: '12px', width: '100%'}}>00,000원 저축</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%', color: "#C08CD4", fontWeight: 'bold'}}>|</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%'}}>공동</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%', color: "#C08CD4", fontWeight: 'bold'}}>|</span>
            <span style={{fontSize: '12px', width: '100%', marginLeft: '12%'}}>23.08.12</span>
            <button type="submit" style={{backgroundColor: 'white', width: '10%', marginLeft: '5%', marginTop: "1%", border: 'none'}}>
              <img src="../images/edit.png"/>
            </button>
          </div>
          
          <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "30%" }}> | 지출 관리 목표 이벤트</span>
        </div>

      <style jsx>
        {`
          .container {
            background-color: white;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow-y: scroll;
          }

          .box-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5px;
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