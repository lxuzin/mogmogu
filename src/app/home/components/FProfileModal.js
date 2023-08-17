import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../Profile.module.css';

const FProfileModal = ({ open, onClose, imageSrc }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSaveMessage = () => {
    console.log('Saved message:', message);
  };
  
  if (!open) return null;

  return (
    <div className={styles.container}>
      <img
        src="/images/close.png"
        alt="Close Image"    
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
      />
      <div className={styles['profile-image']}>
        <img 
          src={imageSrc} alt="Modal Image"
          style={{
            width: '70px',
            height: '70px',
          }}
        />
      </div>
      <div className={styles['profile-content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['profile-text']}
          style={{
            marginTop: '50px',
            fontSize: '13px',
            color: 'white' 
          }}>
          이모아
        </div>
        <div className={styles['profile-text']}
          style={{
            marginTop: '5px',
            fontSize: '13px',
            color: 'white' 
          }}>
          2000.12.13
        </div>
        <div className={styles['profile-text']}
          style={{
            marginTop: '5px',
            fontSize: '10px',
            color: '#633277' 
          }}>
          moa@gmail.com
        </div>
        <div className={styles['profile-message']}
          style={{
            marginTop: '25px',
            fontSize: '10px',
            color: '#633277' 
          }}>
            <textarea
              type="text"
              placeholder="코타키나발루 갈거야~"
              style={{
                marginTop: '5px',
                marginLeft: '5px',
                width: '100%',
                height: '100%',
                fontSize: '10px',
                border: 'none',
                outline: 'none',
                color: '#633277',
                verticalAlign: 'middle',
                background: 'transparent',
                resize: 'none'
              }}
              value={message}
              onChange={handleInputChange}
            />
        </div>
        <div className={styles['button']} onClick={handleSaveMessage}>
          프로필 편집
        </div>
      </div>
    </div>
  );
};

export default FProfileModal;