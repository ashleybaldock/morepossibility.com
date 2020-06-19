import React from 'react';
import styles from './PageParagraph.module.css';

export const PageParagraph = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};
