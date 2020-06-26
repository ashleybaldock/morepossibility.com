import React from 'react';
import { FlexColumn } from 'entropy-ui';
import styles from './PageSection.module.css';

export const PageSection = ({ className = '', children, ...props }) => {
  return (
    <FlexColumn className={`${styles.pageSection} ${className}`}>
      {children}
    </FlexColumn>
  );
};
