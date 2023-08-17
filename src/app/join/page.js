'use client'
import JoinUp from "@/Containers/Join/JoinUp";
import JoinForm1 from "@/Containers/Join/JoinForm1";
import JoinForm2 from "@/Containers/Join/JoinForm2";
import JoinForm3 from "@/Containers/Join/JoinForm3";
import useJoinContext from "@/Context/Join/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Join(props) {
  const { user, formNum, setFormNum } = useJoinContext();
  const router = useRouter()
  console.log(user);


  return (
    <>
      <div className="joinbody">
        <div className="jointopbar">회원가입</div>

        {formNum === 1 || formNum === 2 ? <JoinUp /> : null}
        {formNum === 1 ? <JoinForm1 /> : formNum === 2 ? <JoinForm2 /> : <JoinForm3 />}
        <div className="joinBtnDiv">
          <button className="joinBtn" onClick={() => {
            router.push("/login")
          }}>취소</button>
        </div>

      </div>


      <style jsx>{`
        .joinbody {
          background-color: white;
          height : 100%;
          display: flex;
          flex-direction: column;
        }
        
        .jointopbar {
          background-color: #EADEEF;
          color: white;
          width: 100%;
          height: 42px;
          display: flex;
          align-items: center;
        }
        .joinBtnDiv {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
        .joinBtn {
          background-color: white;
          color: #C998DC;
          border-color: #C998DC;
          border-radius: 50%;
          min-width: 50px;
          min-height: 50px;
        }
        
      `}</style>
    </>
  )
}