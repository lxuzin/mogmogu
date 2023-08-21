"use client"

import useJoinContext from "@/Context/Join/store";

export default function JoinForm2() {
  const { user, setUser, formNum, setFormNum } = useJoinContext();
  const addJoinInfo2 = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      avgcostpermonth: e.target.avgcostpermonth.value,
      avgnumpermonth: e.target.avgnumpermonth.value,
      coupleStartDate: e.target.coupleStartDate.value,
    })
    setFormNum(3);

  };
  return (
    <>
      <div className="joinDown">
        <form className="joinForm" onSubmit={addJoinInfo2}>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="coupleStartDate">사귄 날짜를 입력하세요</label><br />
            <input className="joinInput" type="date" id="coupleStartDate" name="coupleStartDate" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="avgcostpermonth">한달 평균 데이트 비용 </label><br />
            <input className="joinInput" type="text" id="avgcostpermonth" name="avgcostpermonth" autoComplete='off' /><span>만원</span><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="avgnumpermonth">한달 평균 데이트 회수 </label><br />
            <input className="joinInput" type="number" id="avgnumpermonth" name="avgnumpermonth" autoComplete='off' /><span>번</span><br />
          </div>
          <div className="joinBtnDiv">
            <button className="joinBtn" type="submit">다음</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .joinForm {
          background-color: white;
          margin : 35px;
          text-align: start;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .joinFormOne {
          border-bottom: solid 1px;
          width: 70%;
          margin-top: 5%;
          margin-bottom : 5%;
          font-weight: bolder;
        }
        
        .joinLabel {
          color: #C998DC;
          margin-bottom : 10%;
          font-size: 100%;
        }
        
        .joinInput {
          background: none;
          border: none;
          color: inherit;
          text-align: center;
          margin-top: 10%;
          width: 80%;
          font-size: 150%;
        
        }
        /* bottom 공유 */
        .joinBtnDiv {
          text-align: center;
          width: 100%;
        }
        
        .joinBtn {
          background-color: #C998DC;
          color: white;
          border-color: white;
          border-radius: 5px;
          width: 70%;
          min-height: 35px;
          margin-top: 15px;
        }`}</style>
    </>
  )
}