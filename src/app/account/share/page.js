'use client'
import Modal from "@/Containers/account/share/Modal";
import useAccountContext from "@/Context/account/store";
import { useGlobalContext } from "@/app/Context/store";
import { useState } from "react";

export default function Share(props) {
  const { date, setDate,
    datingCostList, setDatingCostList,
    datingCostObject, setDatingCostObject } = useAccountContext();

  const { selectedBankName } = useGlobalContext();

  const totalCost = selectedBankName.transactions.reduce((total, transaction) => total + transaction.cost, 0);

  // 데이트 비용 공유버튼을 활성화해야한다.
  // 즉, 모달창을 띄워줘야 한다. zindex를 높게 설정해 준다.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBankAccount = async () => {
    const id = 0;
    const resp = await fetch(`http://localhost:9999/banks/${id}`)
    const result = await resp.json();
    console.log(result);
  }

  const handleBankTransactions = async () => {
    const resp = await fetch(`http://localhost:9999/transactions`)
    const result = await resp.json();
    console.log(result);
  }
  return (
    <>
      <div className="AccountBanckDiv">
        <div className="AccountBanckTopDiv">
          <div className="AccountBankDescription">
            <div><img src="/account/share/grayarrow.png" alt="" /></div>
            <div>{selectedBankName.name}</div>
            <div>{selectedBankName.accountNum}</div>
          </div>
          <div className="AccountBanckTotalCost">
            {cost}
            
          </div>
        </div>
        <hr />


        <div className="AccountBankDetailsDiv">
          <div className="AccountBankDetailsTopbar">
            <div className="AccountBanckDetailsTotal">
              <p>전체</p>
              <button className="AccountBanckDetailsTotalBtn"><img src="/account/share/blackarrow.png" alt="아래화살표" /></button>
            </div>
            <button className="AccountBankDetailsShareBtn" onClick={openModal}>
              공유</button>
            {modalIsOpen && (
              <Modal closeModal={closeModal} />
            )}
          </div>
          <div className="AccountBankDetailsBottom">
            <div className="AccountBankDetailsBottomDay">
              8월 22일
            </div>
            <hr />

            <div className="AccountBankDetailsBottomOneOfContent">
              <div className="AccountBankDetailsBottomOneStoreOfContent">
                <img src="/account/share/imggs25.png" alt="" />
                <p>GS25 뚝섬유원지점</p>
              </div>
              <p>3000</p>
            </div>

            <div className="AccountBankDetailsBottomOneOfContent2">
              <div className="AccountBankDetailsBottomOneStoreOfContent">
                <img src="/account/share/imgnotong.png" alt="" />
                <p>노랑통닭 건대점</p>
              </div>
              <p>18000</p>
            </div>

            <div className="AccountBankDetailsBottomDay">
              8월 23일
            </div>
            <hr />

            <div className="AccountBankDetailsBottomOneOfContent">
              <div className="AccountBankDetailsBottomOneStoreOfContent">
                <img src="/account/share/transimg.png" alt="" />
                <p>교통 후불요금</p>
              </div>
              <p>14000</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .AccountBanckTopDiv {
  margin-left: 1.5rem;
  margin-top: 1.5rem;
}

.AccountBankDescription {
  display: flex;
  font-size: larger;
  font-weight: bold;
  color: #D9D9D9;
  margin-bottom: 0.5rem;
}
.AccountBanckTotalCost {
  font-size: xx-large;
  font-weight: lighter;
  margin-bottom: 1rem;

}
/* 아래 디테일 파트 */
.AccountBankDetailsDiv {

}

.AccountBanckDetailsTotal {
  font-size: larger;
  font-weight: bolder;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;

}
.AccountBanckDetailsTotalBtn {
  background-color: white;
  border: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.AccountBankDetailsTopbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.AccountBankDetailsShareBtn {
  background-color: #C998DC;
  color: white;
  border-color: white;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
}

.AccountBankDetailsBottom {
  margin-bottom: 40px;
}

.AccountBankDetailsBottomDay {
  color: #D9D9D9;
}

.AccountBankDetailsBottomOneOfContent {
  width: 100%;
  display: flex;
  justify-content: space-between;
  
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
}

.AccountBankDetailsBottomOneStoreOfContent > img {
  max-width: 60px;
  max-height: 60px;
  margin: 0.5rem;
}`}</style>
    </>
  )
}