import React from 'react';
import styles from './PageHeading.module.css';

export const PageHeading = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};
