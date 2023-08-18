'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Manage2(props) {
  const router = useRouter();

  return (
    <>
      <div className="container">
        <button className="backBtn" type="submit" onClick={() => router.push("/manage")}>
          <img src="../images/back.png" />
        </button>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold' }}> | 지출 관리 목표 이벤트 편집</span>
        <span style={{ fontSize: '13px', marginLeft: "5%", fontWeight: 'bold', marginTop: "5%" }}> 목표 이벤트 이름 </span>
        <div className="box-container">
          <div className="box">
              <input
                type="text"
                style={{ border: 'none', outline: 'none', width: '90%', marginLeft: '3%'}}
              />
          </div>
        </div>
        <span style={{ fontSize: '13px', marginLeft: "5%", fontWeight: 'bold' }}> 이벤트 날짜 </span>
        <div className="box-container">
          <div className="box">
          <input
                type="text"
                placeholder="23.00.00"
                style={{width: '40%', marginLeft: '5%', marginTop: '1%', textAlign: 'center'}}
              />
              <span style={{ fontSize: '13px', color: 'grey', marginLeft: '3%' }}>~</span>
          <input
                type="text"
                placeholder="23.00.00"
                style={{width: '40%', marginLeft: '2%', marginTop: '1%', textAlign: 'center'}}
              />
          </div>
        </div>
        <span style={{ fontSize: '13px', marginLeft: "5%", fontWeight: 'bold' }}> 필요한 금액 </span>
        <div className="box-container">
          <div className="goalbox">
              <input
                type="text"
                style={{ border: 'none', outline: 'none', width: '80%', marginLeft: '8%'}}
              />
              <span style={{ fontSize: '13px', color: 'grey' }}>원</span>
            </div>
        </div>
        <div className="btn-container">
          <div className="Btn">
            편집         
          </div>
          <div className="Btn">
            수정         
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            background-color: white;
            display: flex;
            flex-direction: column;
            height: 100vh;
          }

          .backBtn {
            background-color: white;
            width: calc(50% - 200px);
            height: 5vh;
            border: none;
          }

          .btn-container {
            width: 100%;
            display: flex;
            margin-top: 10%;
            padding-right: 10%;            
            justify-content: flex-end;
          }

          .Btn {
            background-color: #C08CD4;
            width: 15%;
            height: 20px;
            border: 1px solid #ffffff;
            border-radius: 5px;       
            cursor: pointer;
            text-align: center;
            color: white;
            font-size: 14px;
            font-weight: bold;
            margin-left: 2%;
          }

          .box-container {
            display: flex;
            flex-direction: column;
            margin-Left: 5%;
            margin-top: 3px;
            margin-bottom: 10px;
          }

          .box {
            width: 80%;
            border: 1px solid black;
            margin-top: 5px;
            background-color: white;
            border-radius: 5px;
            height: 30px;
          }

          .goalbox {
            width: 30%;
            border: 1px solid black;
            margin-top: 5px;
            background-color: white;
            border-radius: 5px;
            height: 30px;
          }
          
          .boxcontent {
            marginTop: 5px;
            marginLeft: 20px;
            width: 100%;
            height: 100%;
            fontSize: 10px;
            border: none;
            outline: none;
            verticalAlign: middle;
            background: transparent;
            resize: none
          }

        `}
      </style>
    </>
  );
}