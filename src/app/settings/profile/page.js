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
      <h1 style={{ backgroundColor: 'rgba(203, 161, 220, 0.57)', padding: '10px',color:'white' }}>마이페이지</h1>
      <hr/>
      <div style={{ display: 'flex', alignItems: 'center', padding:'10px' }}>
        <img
          src="/profile-picture.jpg"
          alt=""
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px', marginLeft:'10px' }}
        />
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{fontStyle:'italic'}}>{userProfile.name}</h2> 
        </div>
          <h4 style={{fontStyle:'italic', margin:'8px'}}>{userProfile.cp}</h4> 
          <p style={{fontSize:'small', margin:'8px'}}>{userProfile.massage}</p>
        </div>
      </div>
      
      <hr />
      <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{margin:'10px'}}>
        <span style={{ color:'#C998DC', marginLeft:'20px'}}> 생일  </span> 
        <span style={{marginLeft:'45px'}}>{userProfile.birthday}</span></p> 
        <img src="/pen.png" alt="" style={{ width: '13px', height: '13px', marginLeft: '140px' }} />
      </div>
      <hr/>
      <div >
      <p style={{margin:'10px'}}> 
        <span style={{color:'#C998DC', marginLeft:'20px'}}>성별  </span>
        <span style={{marginLeft:'45px'}}>{userProfile.gender}</span> 
        <img src="/pen.png" alt="" style={{ width: '13px', height: '13px', marginLeft: '185px' }} />
      </p><hr/>
      <p style={{margin:'10px'}}> 
        <span style={{color:'#C998DC'}}>📩 계정  </span>
        <span style={{marginLeft:'45px'}}>{userProfile.id}</span> 
      </p><hr/>
      <p style={{margin:'10px'}}> 
        <span style={{color:'#C998DC'}}>📩 상대계정  </span>
        <span style={{marginLeft:'20px'}}>{userProfile.id2}</span> 
      </p><hr/>
      <p style={{margin:'10px'}}> 
        <span style={{color:'#C998DC'}}>📱 전화번호  </span>
        <span style={{marginLeft:'20px'}}>{userProfile.phone}</span> 
      </p>
      </div>
    </div>

      <div>
        <p style={{ padding:'15px', backgroundColor: '#E2CAEB',  color:'white',marginBottom:'2px'}}> <Link style={{ textDecoration:'none', color:'white'}} href="/settings/edit"> 비밀번호 변경 </Link></p>
        <p style={{ padding:'15px', backgroundColor: '#E2CAEB', color:'white'}}><Link style={{ textDecoration:'none', color:'white'}} href="/settings/disconnect"> 상대방과 연결 끊기 </Link></p>
      </div>
      <div style={{textAlign:'center'}}>
        <p style={{ padding:'7px', textDecoration:'underline', marginTop:'50px',color:'#C998DC'}}>회원탈퇴</p>
      </div>
    </div>
  );
};

export default Profile;