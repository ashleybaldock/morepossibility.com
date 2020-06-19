import React from 'react';
import styles from './Contact.module.css';

export const Contact = ({
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
