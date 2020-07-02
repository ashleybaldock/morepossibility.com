import React from 'react';
import { ClassInjector, FlexColumn } from 'entropy-ui';
import styles from './QuoteBlock.module.css';

export const QuoteBlock = ({ className = '', children }) => {
  return (
    <ClassInjector className={className}>
      <FlexColumn className={styles.quoteBlock}>{children}</FlexColumn>
    </ClassInjector>
  );
};
