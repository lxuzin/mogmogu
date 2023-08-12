'use client'
import { useRouter } from "next/navigation";


export default function Join2(props) {
  const router = useRouter();
  return (
    <>
      <div className="joinbody">
        <div className="jointopbar">회원가입</div>
        <div className="formWrapper">
        <div className="joinLogoImg"><img src="/join/pingHeartLogo.png" alt="#" /></div>
        {/* 바뀌는 부분만 css추가 */}
        <div className="joinConnectDiv">
          <div className="joinMyConnect">
            <label className="joinMyConnectLabel" htmlFor="myCode">내 커플연결 코드</label><br />
            <input className="joinMyConnectInput" type="text" id="myCode" name="myCode" defaultValue="12345678" /><br></br>
            <label className="joinMyConnectLabel2" htmlFor="myCode">24시간 내에 연결하지 못하면 초기화 됩니다.</label><br />
            <button className="joinMyConnectBtn">공유</button><br />
          </div>

          <div className="joinYourConnect">
            <label className="joinYourConnectLabel" htmlFor="yourCode">상대방 커플연결 코드</label><br />
            <input className="joinYourConnectInput" type="text" id="yourCode" name="yourCode" defaultValue=""
              autoComplete='off' placeholder="상대방 코드를 입력해주세요." />
            <br />
          </div>
        </div>
        </div>
        <div className="joinBtnDiv">
          <button className="joinBtn" type="submit" onClick={() => {
            router.push("/home")
          }}>전송</button>
          <button className="joinBtn" type="submit" onClick={() => {
            router.push("/login")
          }}>취소</button>
        </div>
      </div>
      <style jsx>
        {`
        .joinbody {
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
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
        
        .joinConnectDiv {
          background-color : white;
        
        }
        
        .joinMyConnect {
          text-align: center;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        
        .joinMyConnectLabel {
          color : #C998DC;
          font-weight: bold;
          margin-bottom: 15px;
          font-size: large;
        }
        
        .joinMyConnectInput {
          border-radius: 5px;
          text-align: center;
          font-weight: bolder;
          font-size: larger;
          width: 70%;
          border-color: #C998DC;
          color: #909090;
        }
        
        .joinMyConnectBtn {
          background-color : #C998DC;
          border-radius: 5px;
          border-color: white;
          color: white;
          margin-top: 10px;  
          font-size: large;
        
        
        }
        
        .joinMyConnectLabel2 {
          font-size: small;
          color: #909090;
        
        }
        
        .joinYourConnect {
          text-align: center;
          margin-top: 35px;
          margin-bottom: 5px;
        }
        
        .joinYourConnectLabel {
          color : #C998DC;
          font-weight: bold;
          margin-bottom: 15px;
          font-size: large;
        
        
        }
        
        .joinYourConnectInput {
          border-radius: 5px;
          text-align: center;
          font-weight: bolder;
          font-size: larger;
          width: 70%;
          border-color: #C998DC;
          color: #909090;
        
        }
        /* bottom 공유 */
        .joinBtnDiv {
          text-align: center;
          margin-top : 15px;
          width: 100%;
          margin-bottom: 30px;
        }

        .joinBtn {
          background-color: #C998DC;
          color: white;
          border-color: white;
          border-radius: 5px;
          width: 90%;

        `}
      </style>
    </>
  )
}