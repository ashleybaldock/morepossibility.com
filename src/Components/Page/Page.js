import React from 'react';
import { FlexColumn } from 'entropy-ui';
import styles from './Page.module.css';

export const Page = ({ className = '', children, ...props }) => {
  return (
    <FlexColumn
      alignItems={'stretch'}
      justifyContent={'center'}
      flex={'1 1 auto'}
      className={`${styles.page} ${className}`}
    >
      {children}
    </FlexColumn>
  );
};
