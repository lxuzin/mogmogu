import useAccountContext from "@/Context/account/store";
import { useEffect, useState } from "react";

const randomImg = ['ahrm.png', 'gs.jpeg', 'kakao.jpg', 'mog.png', 'pen.png', 'profile-picture.jpg', 'rnrals.jpg', 'shfkd.jpeg', 'shin.jpg', 'znfhal.jpg'];

const SelectDay = ({ item }) => {
  const { selectDayCost, setSelectDayCost } = useAccountContext()
  const [selectIndexList, setSelectIndexList] = useState([])
  const handleButton = (selectItem) => {
    setSelectDayCost(prev => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] == selectItem) {
          alert("이미 선택되었습니다.")
          return [...prev]
        }
      }
      return [...prev, selectItem]
    })
    // setSelectIndexList((prev)=>[...prev, index])
    // console.log(selectIndexList)
    console.log(selectDayCost)
  };

  useEffect(() => {

  }, [selectIndexList])

  return (
    <>
      <div className="AccountBankDetailsBottomOne">
        {
          item.list.map((i, index) => (
            <button key={`${i.date}-${index}`} className="AccountBankDetailsBottomOneButton" onClick={() => { handleButton(i) }}>
              <div className="AccountBankDetailsBottomOneOfContent">
                <div className="AccountBankDetailsBottomOneStoreOfContent">
                  {/* <img width={'60px'} src={`/${randomImg[Math.floor(Math.random() * randomImg.length)]}`} alt="" /> */}
                  {/* <img src={item.icon} alt="" /> */}
                  <p>{i.name}</p>
                </div>
                <p>{i.cost}</p>
              </div>
            </button>
          ))
        }
      </div>
      <style jsx>{`
      .ok {
        background-color: #C998DC;
      }
      .AccountBankDetailsBottomOne {
        margin: 5%;
      }

      .AccountBankDetailsBottomOneButton{
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
      }

      .AccountBankDetailsBottomOneOfContent {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        font-size: 20px;

}

.AccountBankDetailsBottomOneOfContent > img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}

.AccountBankDetailsBottomOneOfContent2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #e9cdea;
}

.AccountBankDetailsBottomOneStoreOfContent {
  display: flex;
  justify-content: space-between;
  color: #C998DC;

}

.AccountBankDetailsBottomOneStoreOfContent > img {
  max-width: 60px;
  max-height: 60px;
  margin: 0.5rem;
}`}</style>
    </>
  )
}

export default SelectDay;