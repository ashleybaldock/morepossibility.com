import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './SplashImage.module.css';

export const SplashImage = ({
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
