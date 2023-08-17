"use client"
import React, { useState } from 'react';

const Edit = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const customButtonStyle = {
    backgroundColor: '#C998DC',
    width: '270px',
    height: '35px',
    padding: '12px 24px',
    borderRadius: '20px',
    marginTop: '40px',
    marginLeft: '30px',
    border: 'none',
    color: 'white',
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width:'300px',
    height:'100px',
  };

  const handleSaveClick = () => {
    // 여기에 비밀번호 변경 로직을 추가하세요
    // 현재 비밀번호와 새로운 비밀번호 검증 등을 처리할 수 있습니다.
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 style={{ backgroundColor: '#C998DC', padding: '10px', color: 'white' }}>
        비밀번호 변경
      </h1>

      <div>
        <p style={{ padding: '22px', cursor: 'pointer' }} onClick={() => document.getElementById('currentPasswordInput').focus()}></p>
        <input
          id="currentPasswordInput"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="현재 비밀번호 입력"
          style={{ display: 'block', margin: '10px', padding: '10px', width:'300px' }}
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="새로운 비밀번호 입력"
          style={{ display: 'block', margin: '10px', padding: '10px', width:'300px' }}
        />
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder="새로운 비밀번호 확인"
          style={{ display: 'block', margin: '10px', padding: '10px', width:'300px' }}
        />
        <button onClick={handleSaveClick} style={customButtonStyle}>
          비밀번호 변경
        </button>
      </div>
      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <p>비밀번호가 변경되었습니다.</p>
            <button onClick={() => setIsModalOpen(false)}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;