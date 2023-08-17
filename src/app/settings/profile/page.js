"use client"
import React from 'react';
import Link from 'next/link';


const Profile = () => {
  const userProfile = {
    name: '김모앙',
    cp:'💜 이모아',
    massage: ' 🎈 여름 휴가 발리 가고 시퍼~~',
    birthday: '2000.04.16',
    gender: '남자',
    id: 'withmoang@example.com',
    id2: 'moa1234@example.com',
    phone: '010-1230-0846',
  };

  return (
    <div>
      <h1 style={{ backgroundColor: '#CBA1DC', padding: '10px',color:'white' }}>My Page</h1>
      <hr/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/profile-picture.jpg"
          alt=""
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px', marginLeft:'10px' }}
        />
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{fontStyle:'italic'}}>{userProfile.name}</h2> 
          <img src="/image1.png" alt="" style={{ width: '13px', height: '13px', marginLeft: '5px' }} />
        </div>
          <h4 style={{fontStyle:'italic', margin:'5px'}}>{userProfile.cp}</h4> 
          <p style={{fontSize:'small', margin:'5px'}}>{userProfile.massage}</p>
        </div>
      </div>
      
      <hr />
      <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{margin:'10px', marginLeft:'10px'}}> 생일 | {userProfile.birthday}</p> 
        <img src="/image1.png" alt="" style={{ width: '13px', height: '13px', marginLeft: '5px' }} />
      </div>
      <hr/>
        <p style={{margin:'10px'}}> 성별 | {userProfile.gender}</p><hr/>
        <p style={{margin:'10px'}}>📩 계정 | {userProfile.id}</p><hr/>
        <p style={{margin:'10px'}}>📩 상대계정 | {userProfile.id2}</p><hr/>
        <p style={{margin:'10px'}}>📱 전화번호 | {userProfile.phone}</p><hr/>
      </div>
      <div >
        <p style={{ padding:'15px', backgroundColor: '#CBA1DC',  color:'white'}}> <Link href="/settings/edit"> 비밀번호 변경 </Link></p><hr/>
        <p style={{ padding:'15px', backgroundColor: '#CBA1DC', color:'white'}}><Link href="/settings/disconnect"> 상대방과 연결 끊기 </Link></p><hr/>
      </div>
      <div style={{textAlign:'center'}}>
        <p style={{ padding:'7px', textDecoration:'underline', marginTop:'50px',color:'#C998DC'}}>회원탈퇴</p>
      </div>
    </div>
  );
};

export default Profile;