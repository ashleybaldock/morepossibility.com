import React from 'react';
import styles from './Phenoforge.module.css';

export const Phenoforge = ({
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
