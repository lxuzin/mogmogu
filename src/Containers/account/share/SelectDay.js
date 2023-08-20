const SelectDay = ({ results }) => {
  return (
    <>
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

      <div className="AccountBankDetailsBottomOneOfContent">
        <div className="AccountBankDetailsBottomOneStoreOfContent">
          <img src="/account/share/transimg.png" alt="" />
          <p>교통 후불요금</p>
        </div>
        <p>14000</p>
      </div>
      <style jsx>{`
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

export default SelectDay;