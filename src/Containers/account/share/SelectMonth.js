import SelectDay from "./SelectDay";

const SelectMonth = ({ results }) => {

  console.log(results)

  return (
    <>
      {results && results.map((result, index) => (
        <div>
          <div key={index} className="AccountBankDetailsBottomDay">
            {result.date}
          </div >
          <hr />
          <SelectDay results={results} />
        </div>
      ))}

      {!results &&
        <div className="AccountMogNotContent"><br />
          <h2>계정 연결이 필요합니다.</h2>
        </div>}
      <style jsx > {`
.AccountBankDetailsBottomDay {
  color: #A9A9A9;
}
.AccountMogNotContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ABA9A9;
}
`}</style>
    </>
  )
}

export default SelectMonth;