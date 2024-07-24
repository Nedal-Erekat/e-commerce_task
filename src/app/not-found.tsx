'use client'

import styles from './page.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
