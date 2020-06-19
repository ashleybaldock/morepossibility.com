import React from 'react';
import styles from './Code.module.css';

export const Code = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      Code
      {children}
    </div>
  );
};
