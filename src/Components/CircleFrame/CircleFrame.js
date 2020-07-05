import React from 'react';
import { FlexColumn } from 'entropy-ui';
import styles from './CircleFrame.module.css';

export const CircleFrame = ({ className = '', children }) => {
  return (
    <FlexColumn
      alignItems={'center'}
      justifyContent={'center'}
      className={`${styles.frame} ${className}`}
    >
      {children}
    </FlexColumn>
  );
};
