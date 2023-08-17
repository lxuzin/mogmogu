"use client"
import React, {useState} from 'react';


const disconnect = () => {
    const [checked, setChecked] = useState(false);

    const disc = {
        backgroundColor:'#E2CAEB',
        borderRadius:'10px',
        border:'none',
        width:'340px',
        height:'50px',
        marginLeft:'20px',
    };

    const checkStyle = {
        cursor: 'pointer',
        color: checked ? '#888888' : '#CCCCCC'
    };

    const toggleCheck = () => {
        setChecked(!checked);
    };


    return (
    <div>
        <div style={{textAlign:'center'}}>
            <h1>❗</h1>
            <h2>주의사항 </h2>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', margin: '20px', backgroundColor: 'white' }}>
            <h4> ☑️ 연결되었던 각자의 계정으로 공유된 앱 내 자료를 더이상 열람할 수 없게 됩니다. </h4>
            <h4> ☑️ 자료 보관기간 만료되면, 기존 자료는 파기됩니다. </h4>
        </div>
        <div style={{padding:'20px'}}>
            <p>자료를 복구할 수 있는 기간은 연결을 끊은 시점으로부터 30일, 프리미엄 사용자는 100일 입니다. </p><br/>
            <p>재연결 시, 연결을 끊었던 계정으로 로그인 및 재연결을 해야만 합니다. </p><br/>
            <p>같은 계정으로 새로운 연결을 맺거나 계정을 영구 삭제한 경우, 자료 복구가 불가합니다. </p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', margin: '20px', backgroundColor: '#EADEEF', textAlign:'center' }}>
            <h3>이모아님과의 연결을 끊겠습니까?</h3>
            <div style={{display:'flex'}}>
                <img src='/znfhal.jpg' alt='' style={{ padding:'8px', width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px', marginLeft:'10px' }}></img>
                <h2 style={{ fontSize: '30px' }}>❤️</h2>
                <img src='/profile-picture.jpg' alt='' style={{ padding:'8px', width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px', marginLeft:'10px' }}></img> 
            </div>
            <h3>우리가 함께한 시간</h3>
            <p>2020.05.10 ~ 2023.08.12<br/>3년 3개월 2일 (1189일)</p>
        </div>
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', margin: '20px', backgroundColor: 'white' }}>
            <h3><span style={checkStyle} onClick={toggleCheck}>✔️</span>  자료 복구 만료일은 9월22일 입니다.</h3>
        </div>
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', margin: '20px', backgroundColor: 'white' }}>
            <h3> <span style={checkStyle} onClick={toggleCheck}>✔️</span>  위 내용을 전부 확인했습니다.</h3>
        </div>
        <div >
            <button type='submit' style={disc}>연결 끊기</button>
        </div>
    </div>
    );
};

export default disconnect;