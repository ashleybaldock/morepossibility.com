import React from 'react';
import styles from './FlexColumn.module.css';

export const FlexColumn = ({
  children,
  className = '',
  alignItems = undefined,
  justifyContent = undefined,
  flex = undefined,
  alignItemsEnd = false,
  flexWrap = 'nowrap',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`${styles.flexColumn} ${
        alignItemsEnd ? styles.alignItemsEnd : ''
      } ${className}`}
      style={{
        flex,
        alignItems,
        justifyContent,
        flexWrap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
