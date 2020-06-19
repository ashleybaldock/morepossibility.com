import React from 'react';
import styles from './NoMatch.module.css';

export const NoMatch = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      404
      {children}
    </div>
  );
};
