const AccountDetail = ({ results }) => {
  return (
    <>
      {results.map((result, index) => (
        <div key={index} className="AccountMogContent">
          <div className="AccountMogOneOfContent">
            <div className="AccountMogOneStoreOfContent">
              <img src="imggs25.png" alt="" />
              <p>{result.name}</p>
            </div>
            <p> {result.cost}</p>
          </div>
        </div>
      ))
      }
      <style jsx>{`
      .AccountMogContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5%;
    }
    
    .AccountMogOneOfContent {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 20px
    }
    
    .AccountMogOneStoreOfContent {
      display: flex;
      justify-content: space-between;
      color : #C998DC;
    }`}</style>
    </>

  );
};

export default AccountDetail;