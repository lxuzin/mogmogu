"use client"

import React, { useEffect, useState } from "react";
import FProfileModal from "./components/FProfileModal";
import MProfileModal from "./components/MProfileModal";
import FeedModal from "./components/FeedModal";
import Image from 'next/image';
import styles from './Home.module.css';

const Home = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen1(true);
  };

  const handleImage2Click = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen2(true);
  };

  const handleImage3Click = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen3(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
    setSelectedImage('');
  };

  const closeModal2 = () => {
    setModalOpen2(false);
    setSelectedImage('');
  };

  const closeModal3 = () => {
    setModalOpen3(false);
    setSelectedImage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img
            src="/images/kuromi_m.png"
            alt="Left Image"
            className={`${styles.left_image} ${styles.clickableImage}`}
            onClick={() => handleImageClick('/images/kuromi_m.png')}
          />
          <div className={styles.text}>이모앙</div>
        </div>
        <div className={styles.center_content}>
          <div className={styles.line_container}>
            <img
              src="/images/small_line.png"
              alt="Left Image"
              className={styles.left_image}
            />
            <img
              src="/images/heart.png"
              alt="Left Image"
              style={{
                maxWidth: '20px',
                maxHeight: '20px',
                objectFit: 'contain',
              }}
            />
            <img
              src="/images/small_line.png"
              alt="Right Image"
              className={styles.right_image}
            />
          </div>
          <div className={styles.text_container}>
            Day 100
          </div>
          <div className={styles.text_container}>
            연애중
          </div>
          <div className={styles.line_container}>
            <img
              src="/images/big_line.png"
              alt="Left Image"
              className={styles.right_image}
            />
          </div>
        </div>
        <div className={styles.profile}>
          <img
            src="/images/kuromi_f.png"
            alt="Right Image"
            className={`${styles.right_image} ${styles.clickableImage}`}
            onClick={() => handleImage2Click('/images/kuromi_f.png')}
          />
          <div className={styles.text}>이모아</div>          
          </div>
        </div>
        <img
            src="/images/logo.png"
            alt="logo Image"
            className={`${styles.logo} ${styles.clickableImage}`}
            onClick={() => handleImage3Click('/images/logo.png')}
          />
        <div className={styles.AdWrapper}>
          <img src="/images/advertisement.png" style={{width:'100%'}}/>
        </div>
        {modalOpen1 && (
        <div className={styles.modalOverlay}>
          <MProfileModal open={modalOpen1} onClose={closeModal1} imageSrc={selectedImage} />
        </div>
      )}

      {modalOpen2 && (
        <div className={styles.modalOverlay}>
          <FProfileModal open={modalOpen2} onClose={closeModal2} imageSrc={selectedImage} />
        </div>
      )}

      {modalOpen3 && (
        <div className={styles.modalOverlay}>
          <FeedModal open={modalOpen3} onClose={closeModal3} imageSrc={selectedImage} />
        </div>
      )}
    </div>
  );
};

export default Home;