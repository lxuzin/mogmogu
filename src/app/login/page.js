'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(props) {
  const router = useRouter();
  return (
    <>
      <div className="loginbody">
        <div className="loginImage"><img src="/login/whiteHeartLogo.png" alt="#" /></div>
        <div className="loginImage"><img src="/login/profileLogo.png" alt="#" /></div>
        <form className="loginForm" action="">
          <input className="loginIdPassword" type="text" name="nickname" placeholder="아이디" autoComplete='off' />
          <input className="loginIdPassword" type="password" name="password" placeholder="비밀번호" autoComplete='off' />
          <button className="loginBtn" onClick={(e) => {
            e.preventDefault();
            router.push("/")
          }}>로그인</button>
        </form>

        <div>
          <button className="loginBottomBtn">아이디찾기</button>
          <button className="loginBottomBtn">비밀번호 찾기</button>
          <button className="loginBottomBtn" onClick={(e) => {
            e.preventDefault();
            router.push("login/join1")
          }}>회원가입</button>
        </div>
        <h1><Link href="/home">홈 화면으로 가기</Link></h1>

      </div>
      <style jsx>
        {`
        .loginbody {
          background-color: #C998DC;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          
        }
        
        .loginImage {
          margin-bottom: 40px;
        }
        
        .loginIdPassword {
          width: 243px; 
          height: 35px; 
          background: white; 
          border-radius: 5px;
          margin-top: 3px;
          text-align: center;
          border-style: none;
        
        }
        
        .loginBtn {
          display: flex;
          width: 243px; 
          height: 35px; 
          background: #A742CF; 
          border-radius: 5px;
          margin-top: 3px;
          color: white;
          justify-content: center;
          align-items: center;
          border-style: none; 
        }
        
        .loginForm {
          width: 243px; 
        }
        .loginBottomBtn {
          background-color: #C998DC;
          color: white;
          font-size: 14px;
          border-style: none;
        }
        `}
      </style>
    </>
  )
}