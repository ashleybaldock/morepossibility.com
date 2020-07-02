import React from 'react';
import styles from './TextEmphasis.module.css';

export const TextEmphasis = ({ className = '', children }) => {
  return <span className={`${styles.emphasis} ${className}`}>{children}</span>;
};
