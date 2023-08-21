import useJoinContext from "@/Context/Join/store";

export default function JoinForm1() {
  const { user, setUser, formNum, setFormNum } = useJoinContext();
  /**
   * 정보 저장.
   * @param {*} e 
   */
  const addJoinInfo = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: e.target.name.value,
      birthday: e.target.birthday.value,
      phone: e.target.phone.value,
      nickname: e.target.nickname.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
    })
    setFormNum(2);
  };


  return (
    <>
      <div className="joinDown">
        <form className="joinForm" onSubmit={addJoinInfo}>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="name">이름 </label><br />
            <input className="joinInput" type="text" id="name" name="name" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="birthday">생년월일 </label><br />
            <input className="joinInput" type="date" id="birthday" name="birthday" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="phone">전화번호 </label><br />
            <input className="joinInput" type="text" id="phone" name="phone" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="nickname">아이디 </label><br />
            <input className="joinInput" type="text" id="nickname" name="nickname" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="password">비밀번호 </label><br />
            <input className="joinInput" type="password" id="password" name="password" autoComplete='off' /><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="password2">비밀번호 확인 </label><br />
            <input className="joinInput" type="password" id="password2" name="password2" autoComplete='off' /><br />
          </div>
          <div className="joinBtnDiv">
            <button className="joinBtn" type="submit">다음</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .joinDown {
          background-color: white;
        }
        .joinForm {
          background-color: white;
          margin : 35px;
          text-align: start;
        }
        
        .joinFormOne {
          margin-top : 20px;
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
          height: 30px;
          margin-top : 5px;
        
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