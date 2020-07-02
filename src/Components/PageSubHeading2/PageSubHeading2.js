import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './PageSubHeading2.module.css';

export const PageSubHeading2 = ({ children }) => {
  return (
    <FlexRow className={styles.subHeading2} wrapperElement={<h3>.</h3>}>
      {children}
    </FlexRow>
  );
};
