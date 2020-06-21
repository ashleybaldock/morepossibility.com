import React from 'react';
import { FlexColumn, FlexRow } from 'Components'; // TODO move
import styles from './PageParagraph.module.css';

export const PageParagraph = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <p className={`${styles.paragraph} ${className}`}>
      {children}
    </p>
  );
};
