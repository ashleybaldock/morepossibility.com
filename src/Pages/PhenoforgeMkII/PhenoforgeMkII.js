import React from 'react';
// import styles from './PhenoforgeMkII.module.css';

export const PhenoforgeMkII = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
