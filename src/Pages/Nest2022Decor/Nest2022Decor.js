import React from 'react';
// import styles from './Nest2022Decor.module.css';

export const Nest2022Decor = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
