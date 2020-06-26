import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './PageHeading.module.css';

const wrapper = <h1>.</h1>;

export const PageHeading = ({ className = '', children, ...props }) => {
  return (
    <FlexRow
      wrapperElement={wrapper}
      className={`${styles.pageHeading} ${className}`}
    >
      {children}
    </FlexRow>
  );
};
