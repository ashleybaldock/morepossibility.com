import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './Footer.module.css';

export const Footer = ({ className = '', children }) => {
  return (
    <FlexRow
      justifyContent={'center'}
      className={`${styles.footer} ${className}`}
    >
      {children}
    </FlexRow>
  );
};
