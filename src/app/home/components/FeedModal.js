import React, { useState, useEffect } from 'react';
import styles from '../Feed.module.css';

const FeedModal = ({ open, onClose, imageSrc }) => {
  
  const [count, setCount] = useState(10);
  const [imagePath, setImagePath] = useState('/images/hungry_bear.png');
  const [changingImage, setChangingImage] = useState(false);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (changingImage) {
      setImagePath('/images/full_bear.png');

      const timer = setTimeout(() => {
        setImagePath('/images/hungry_bear.png');
        setChangingImage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [changingImage]);

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
      <div className={styles.lineContainer}>
      <p>__________________________________________________</p>
  </div>
  <div className={styles.textContainer}>
    <div className={styles.centeredText}>
      모그
    </div>
  </div>
  <div className={styles.lineContainer}>
    <p>___________________________________________________</p>
  </div>
  <div className={styles.centerContainer}>
    <img
      src={imagePath}
      className={styles.centeredImage}
    />
  </div>
  <div className={styles.buttonContainer}>
    <button className={styles.customButton } onClick={() => { decreaseCount(); setChangingImage(true); }}>
      먹이주기
    </button>
  </div>
  <div className={styles.bottom}>
    <div className={styles.coincontainer}>
      <img
        src="/images/coin.png"
        className={styles.coin}
      />
    </div>
    <div className={styles.cointext}>
      내 먹이 : {count}개
    </div>
  </div>
  </div>
  );
};

export default FeedModal;