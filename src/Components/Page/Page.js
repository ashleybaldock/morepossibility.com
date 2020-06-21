import React from 'react';
import { FlexColumn, FlexRow } from 'Components'; // TODO move
import styles from './Page.module.css';

export const Page = ({

  className = '',
  children,
  ...props
}) => {
  return (
    <FlexColumn alignItems={'stretch'} justifyContent={'center'} className={`${styles.page} ${className}`}>
      {children}
    </FlexColumn>
  );
};
