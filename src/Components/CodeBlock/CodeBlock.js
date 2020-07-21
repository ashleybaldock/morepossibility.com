import React from 'react';
// import styles from './CodeBlock.module.css';

export const CodeBlock = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
