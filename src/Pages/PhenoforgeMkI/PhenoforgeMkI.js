import React from 'react';
import styles from './PhenoforgeMkI.module.css';

export const PhenoforgeMkI = ({
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
