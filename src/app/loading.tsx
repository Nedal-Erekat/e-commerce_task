'use client'

import styles from './page.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingMessage}>Loading...</p>
    </div>
  );
};

export default LoadingPage;
