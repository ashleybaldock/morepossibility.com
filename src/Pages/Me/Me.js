import React from 'react';
// import styles from './Me.module.css';

export const Me = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
