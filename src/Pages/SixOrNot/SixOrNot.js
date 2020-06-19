import React from 'react';
import styles from './SixOrNot.module.css';

export const SixOrNot = ({
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
