"use client"
import React, { useState } from 'react';


const Account = () => {
  const userAccount = {
    ac1: '110-464-123456',
    ac2: '3333-12-3456789',
    ac3 : '454123-45-67',
    ac4 : '373-12-3456-79',
    ac5 : '112-2569-8459-58',
  };

  const customButton = {
    backgroundColor: '#C998DC',
    width: '250px',
    padding:'12px 24px',
    borderRadius: '20px',
    marginTop: '5px',
    border: 'none',
    color:'white'
  };

  const button1 = {
    backgroundColor: '#C998DC',
    marginLeft: '10px',
    borderRadius: '10px',
    border: 'none',
    color:'white',
    padding:'2px'
  };
  const button2 = {
    backgroundColor: '#C998DC',
    marginLeft: '20px',
    borderRadius: '10px',
    border : 'none',
    color:'white',
    padding:'2px'
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',

    zIndex:1000,
    minWidth:'300px',
    width: '80%', // 원하는 너비
    maxHeight: '80%', // 원하는 높이
    overflowY: 'auto',
  };
  
  const modalButtonStyle = {
    backgroundColor: '#C998DC',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '8px 20px',
    cursor: 'pointer',
  };


  const [selectedAccount, setSelectedAccount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Account:', selectedAccount);
    setIsModalOpen(true);
    // 여기에 다음 액션을 추가하면 됩니다.
  };

  

  return (
    <div >
      <h1 style={{ backgroundColor: '#CBA1DC', padding: '10px', color:'white' }}>계좌 연결</h1>
      <h3 style={{color: '#C998DC', padding:'9px'}}>연결 계좌</h3>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="accountSelect"> </label>
        <select id="accountSelect" value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
          <option value="" > 계좌 선택 </option>
          <option value={userAccount.ac1}>신한은행 입출금 통장</option>
          <option value={userAccount.ac2}>카카오뱅크 입출금 통장</option>
          <option value={userAccount.ac5}>부산은행 입출금 통장</option>
        </select>
          <button type="submit" style={{marginLeft:'10px', backgroundColor:'#E2CAEB', border: 'none', color:'white'}}> 연결 </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/shin.jpg" alt="" style={{ width: '20px', height: '22px', marginLeft: '10px' }} />
          <p style={{ marginLeft: '10px' , padding:'7px'}}>신한은행 입출금 통장 <br /> {userAccount.ac1}</p>
          <button type='submit' style={button1}> 상세보기 </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <img src="/kakao.jpg" alt="" style={{ width: '20px', height: '21px' }} />
          <p style={{ marginLeft: '10px', padding:'7px' }}>카카오뱅크 입출금 통장 <br /> {userAccount.ac2}</p>
          <button type='submit' style={button2}> 상세보기 </button>
        </div>
      </div>

      <div >
        <h3 style={{color: '#C998DC', padding:'9px'}}> 연결 추가</h3>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/rnrals.jpg" alt="" style={{ width: '20px', height: '17px', marginLeft: '10px' }} />
          <p style={{ marginLeft: '10px', padding:'7px' }}>국민은행 입출금 통장 <br /> {userAccount.ac3}</p>
          <button type='submit' style={button1} onClick={() => setIsModalOpen(true)}> 선택하기 </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <img src="/rnrals.jpg" alt="" style={{ width: '20px', height: '21px' }} />
          <p style={{ marginLeft: '10px', padding:'7px' }}>국민은행 입출금 통장 <br /> {userAccount.ac4}</p>
          <button type='submit' style={button2} onClick={() => setIsModalOpen(true)}> 선택하기 </button>
        </div>
      </div>
      </div>
      <div style={{marginLeft:'60px', marginTop:'15px'}}>
        <button type='submit' style={customButton}> ➕ 계좌 연결 </button>
      </div>
      {isModalOpen && (
        <div style={modalStyle}>
          <h3>새로운 계좌가 연결되었습니다 !</h3>
          <h2 style={{textAlign:'center', fontSize:'25px'}}>✔️</h2>
          <img src='/ahrm.png' alt='' style={{maxWidth:'100%'}}/>
          <p style={{color:'#C998DC', marginBottom:'8px'}}>이제 돈을 많이 '모앙'주세요 !</p>
          <button style={modalButtonStyle} onClick={() => setIsModalOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default Account;
