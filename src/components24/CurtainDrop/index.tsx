import React, { useState } from 'react';
import styles from './styles.module.scss';

const CurtainDrop = () => {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const handleClick = () => {
    if (!isCurtainOpen) {
      setIsCurtainOpen(true);
    }
  };

  return (
    <div 
      className={`${styles.curtainContainer} ${isCurtainOpen ? styles.open : ''}`}
      onClick={handleClick}
    >
      <div className={`${styles.curtain} ${styles.left}`}></div>
      <div className={`${styles.curtain} ${styles.right}`}></div>
      <div className={`${styles.welcomeText} ${isCurtainOpen ? styles.fadeIn : ''}`}>
        {/* Welcome to Mysuru Dasara 2023 */}
      </div>
    </div>
  );
};

export default CurtainDrop;