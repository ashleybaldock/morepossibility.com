import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './PageSubHeading1.module.css';

export const PageSubHeading1 = ({ children, ...props }) => {
  return (
    <FlexRow
      className={styles.subHeading1}
      wrapperElement={<h2>.</h2>}
      {...props}
    >
      {children}
    </FlexRow>
  );
};
