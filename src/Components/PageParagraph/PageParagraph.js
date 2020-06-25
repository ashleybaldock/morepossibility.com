import React from 'react';
import styles from './PageParagraph.module.css';

export const PageParagraph = ({ className = '', children, ...props }) => {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>;
};
