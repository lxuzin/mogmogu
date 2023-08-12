'use client'

import { useRouter } from "next/navigation";

export default function Join1(props) {
  const router = useRouter();
  return (
    <>
      <div className="joinbody">
        <div className="jointopbar">회원가입</div>
        <div className="joinLogoImg"><img src="/join/pingHeartLogo.png" alt="#" /></div>
        {/* 바뀌는 부분만 css추가 */}
        <div className="joinUp">
          <div className="joinborderbar">
            <div className="joinProfImg"><img src="/join/profileSample.png" alt="#" /></div>
            <button className="joinCameraBtn">
              <img src="/join/cameraBtn.png" alt="" />
            </button>
          </div>
        </div>
        <div className="joinDown">
          <form className="joinForm" action="">
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="username">이름 </label><br />
              <input className="joinInput" type="text" id="username" name="username" /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="birthday">생년월일 </label><br />
              <input className="joinInput" type="password" id="birthday" name="birthday" /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="phone">전화번호 </label><br />
              <input className="joinInput" type="password" id="phone" name="phone" /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="nickname">아이디 </label><br />
              <input className="joinInput" type="password" id="nickname" name="nickname" /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="password">비밀번호 </label><br />
              <input className="joinInput" type="password" id="password" name="password" /><br />
            </div>
          </form>
        </div>
        <div className="joinBtnDiv">
          <button className="joinBtn" type="submit" onClick={() => {
            router.push("/join2")
          }}>다음</button>
          <button className="joinBtn" type="submit" onClick={() => {
            router.push("/login")
          }}>취소</button>
        </div>
      </div>
      <style jsx>
        {`
        .joinbody {
          background-color: white;
          height : 100%;
        }
        
        .joinUp {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .jointopbar {
          background-color: #EADEEF;
          color: white;
          width: 100%;
          height: 42px;
          display: flex;
          align-items: center;
        }
        
        .joinLogoImg {
          margin-top: 100px;
          margin-bottom: 50px;
          text-align: center;
        }
        
        .joinborderbar {
          width: 100%;
          height: 70px;
          background-color: #C998DC; 
          position: relative;
        }
        
        .joinProfImg {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -100%);
        }
        
        
        .joinCameraBtn {
          width: 40px;
          height: 30px;
          background-color: white;
          border-radius: 5px;
          margin-top: 3px;
          text-align: center;
          border-radius: 35%;
          border-color: white;
          position: absolute;
          top:50%;
          left:53%;
          transform: translate(0, -100%);
        }
        
        .joinDown {
          background-color: white;
        }
        .joinForm {
          background-color: white;
          margin : 35px;
          text-align: start;
        }
        
        .joinFormOne {
          border-bottom: solid 1px;
        }
        
        .joinLabel {
        color: #C998DC;
        margin-top : 5px;
        }
        
        .joinInput {
          color: black;
          border: none;
          width: 100%;
        margin-top : 5px;
        
        }
        /* bottom 공유 */
        .joinBtnDiv {
          text-align: center;
          margin-top : 15px;
          width: 100%;
          position: absolute; 
          bottom :0;
          margin-bottom: 10px;
        }
        
        .joinBtn {
          background-color: #C998DC;
          color: white;
          border-color: white;
          border-radius: 5px;
          width: 90%;
        
        }
      `}</style>
    </>
  )
}