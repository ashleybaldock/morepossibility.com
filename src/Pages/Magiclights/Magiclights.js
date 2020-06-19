import React from 'react';
import styles from './Magiclights.module.css';

export const Magiclights = ({
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
