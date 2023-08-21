'use client'

import useJoinContext from "@/Context/Join/store"
import { useState } from "react";

export default function JoinUp() {
  const { user, setUser } = useJoinContext();
  const [fileContent, setFileContent] = useState(null);
  const [message, setMessage] = useState('');

  const isImageFile = (file) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return imageExtensions.includes(fileExtension);
  };

  /**
   * 
   * @param {*} e 
   */
  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && isImageFile(selectedFile)) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContent(event.target.result); // 이미지 데이터 URL 저장
        setMessage('파일을 성공적으로 업로드했습니다.');
      };

      reader.onerror = () => {
        setMessage('파일을 업로드하는데 오류가 있습니다.');
      };
      // reader.readAsDataURL(selectedFile); // 이미지 파일을 데이터 URL로 읽기
    } else {
      setMessage('파일을 선택해주세요.');
      setFileContent(null);
    }
    addJoinInfoImg() //유저에 등록해놓기.
  }

  const addJoinInfoImg = () => {
    setUser({
      ...user,
      myImg: fileContent,
    })
  };
  return (
    <>
      <div className="joinUp">
        <div className="joinLogoImg"><img src="/join/pingHeartLogo.png" alt="#" /></div>
        <div className="joinborderbar">
          <div className="joinProfImg"><img src="/join/profileSample.png" alt="#" /></div>

          <label className="joinCameraBtn" onChange={handleUpload}>
            <input type="file" style={{ display: 'none' }} />
            <img src={fileContent === null ? `/join/cameraBtn.png` : fileContent} alt="Selected" />
          </label>
        </div>
      </div>

      <style jsx>{`
        .joinUp {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .jointopbar {
          background-color: #EADEEF;
          color: white;
          width: 100%;
          height: 42px;
          display: flex;
          align-items: center;
        }
        
        .joinLogoImg {
          margin-top: 70px;
          margin-bottom: 70px;
          text-align: center;
          display: flex;

        }
        
        .joinborderbar {
          width: 100%;
          height: 70px;
          background-color: #C998DC; 
          position: relative;
        }
        
        .joinProfImg {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -100%);
        }
        
        
        .joinCameraBtn {
          width: 40px;
          height: 25px;
          background-color: white;
          border-radius: 5px;
          margin-top: 3px;
          text-align: center;
          border-radius: 35%;
          border-color: white;
          position: absolute;
          top:50%;
          left:53%;
          transform: translate(0, -100%);
        }
        `}</style>
    </>
  )
}