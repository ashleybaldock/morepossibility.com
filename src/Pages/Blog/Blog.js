import React from 'react';
import styles from './Blog.module.css';

export const Blog = ({
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
