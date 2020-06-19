import React from 'react';
import styles from './EntropyUI.module.css';

export const EntropyUI = ({
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
