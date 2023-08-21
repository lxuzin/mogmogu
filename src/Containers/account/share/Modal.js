import useAccountContext from "@/Context/account/store";
import { useRouter } from "next/navigation";


const Modal = ({ closeModal }) => {
  const router = useRouter();
  const { selectDayCost, setSelectDayCost } = useAccountContext()
  const { transactions, setTransactions } = useAccountContext();


  const handleShareBtn = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...transactions, ...selectDayCost]),
    }
    try {
      const resp = await fetch(process.env.NEXT_PUBLIC_API_URL +`account`, options);
      if (!resp.ok) {
        throw new Error("Bad response", {
          cause: { resp }
        })
      }
      const account  = await resp.json();
      setTransactions(account)
      router.push("/account");
      alert("등록 되었습니다.")


    } catch (e) {
    }
    setSelectDayCost([]);
    closeModal()
  };
  return (
    <>
      <div className="modal">
        <div className="modal-content">

          <h2>데이트 비용을 공유할까요?</h2>
          <div className="modal-btn">
            <button className="close-btn" onClick={closeModal}>
              취소
            </button>
            <button className="share-btn" onClick={() => {handleShareBtn()}}>
              공유
            </button>
          </div>
        </div>

      </div>
      <style jsx>{`
              /* Modal 스타일 */
        .modal {
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }

        /* 모달 내용 영역 스타일 */
        .modal-content {
          text-align: center;
          background-color: #fefefe;
          margin: 50% auto;
          padding: 20px;
          border: 1px solid #888;
          border-radius: 15px;
          width: 80%;
          max-width: 400px;
          position: relative;
        }
        .modal-btn {
          display: flex;
          flex-direction: column
          justify-content: space-between;
        }

        /* 모달 닫기 버튼 스타일 */
        .close-btn {
          margin: 10% auto;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 15px;
          border-color: white;
        }

        .share-btn {
          margin: 10% auto;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          background-color: #C998DC;
          border-radius: 15px;
          border-color: white;

        }

      `}</style>
    </>
  )
}
export default Modal;