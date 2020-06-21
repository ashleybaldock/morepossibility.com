import React from 'react';
import styles from './PageHeading.module.css';

export const PageHeading = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <h1 className={`${styles.pageHeading} ${className}`}>
      {children}
    </h1>
  );
};
