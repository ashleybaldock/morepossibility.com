import React from 'react';
import styles from './Services.module.css';

export const Services = ({
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
