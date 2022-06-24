import React from 'react';
// import styles from './Microburn2019.module.css';

export const Microburn2019 = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
