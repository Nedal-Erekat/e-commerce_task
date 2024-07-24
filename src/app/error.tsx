'use client'

import styles from './page.module.scss';

const ErrorPage = ({ error }:{error: Error & { digest?: string }
}) => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorTitle}>Error</h1>
      <p className={styles.errorMessage}>{error.message || 'Something went wrong!'}</p>
    </div>
  );
};

export default ErrorPage;
