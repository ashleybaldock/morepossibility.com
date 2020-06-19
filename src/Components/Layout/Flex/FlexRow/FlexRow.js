import React from 'react';
import styles from './FlexRow.module.css';

export const FlexRow = ({
  children,
  className = '',
  alignItems = undefined,
  justifyContent = undefined,
  flex = undefined,
  alignItemsCenter = false,
  justifyContentEnd = false,
  flexGrow = 0,
  flexWrap = 'nowrap',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`${styles.flexRow} 
        ${alignItemsCenter ? styles.alignItemsCenter : ''}
        ${justifyContentEnd ? styles.justifyContentEnd : ''}
        ${flexGrow ? styles.flexGrow : ''}
    ${className}`}
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
