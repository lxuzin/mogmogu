const randomImg = ['ahrm.png', 'gs.jpeg', 'kakao.jpg', 'mog.png', 'pen.png', 'profile-picture.jpg', 'rnrals.jpg', 'shfkd.jpeg', 'shin.jpg', 'znfhal.jpg'];

const SelectDay = ({ item }) => {
  return (
    <>
      {
        item.list.map((item, index) => (
          <div key={`${item.date}-${index}`}>
            <div className="AccountBankDetailsBottomOneOfContent">
              <div className="AccountBankDetailsBottomOneStoreOfContent">
                <img width={'60px'} src={`/${randomImg[Math.floor(Math.random() * randomImg.length)]}`} alt="" />
                {/* <img src={item.icon} alt="" /> */}
                <p>{item.name}</p>
              </div>
              <p>{item.cost}</p>
            </div>
          </div>
        ))
      }
      <style jsx>{`
      .AccountBankDetailsBottomOneOfContent {
        height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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