import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './ImageSplash.module.css';

export const ImageSplash = ({
  src,
  alt = '',
  className = '',
  children,
  ...props
}) => {
  return (
    <FlexRow
      style={{ backgroundImage: `url(${src})` }}
      className={`${styles.splash} ${className}`}
    >
      {children}
    </FlexRow>
  );
};
