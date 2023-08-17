"use client"
import React from 'react';
import Link from 'next/link';

const Settings = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: '#E2CAEB', padding: '7px'}}>설정</h1> 

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '9px', color:'#C998DC' }}>마이페이지</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}><Link href="/settings/profile">마이페이지 관리</Link></p>

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '7px', color:'#C998DC' }}>계좌</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}><Link href="/settings/account">계좌연결</Link></p>

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '7px', color:'#C998DC' }}>암호</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>암호 설정하기</p><br/>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>암호 변경하기</p>

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '7px', color:'#C998DC' }}>알림</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>알림 설정</p><br/>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>알림 소리</p>

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '7px', color:'#C998DC' }}>구독</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>구독 정보</p><br/>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>구독 관리</p>

      <h2 style={{ backgroundColor: '#FDF9FF', padding: '7px', color:'#C998DC' }}>캘린더</h2>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>공휴일 설정</p><br/>
      <p style={{margin:'8px', marginLeft:'7px', color:'#C399D3'}}>기능 설정</p>

    </div>
  );
};

export default Settings;