import React from 'react';
import { FlexRow } from 'entropy-ui';
import { TextMonospaced } from 'Components';
import styles from './BlogDateStamp.module.css';

export const BlogDateStamp = ({ className = '', children, ...props }) => {
  return (
    <TextMonospaced>
      <FlexRow className={styles.blogDateStamp}>{children}</FlexRow>
    </TextMonospaced>
  );
};
