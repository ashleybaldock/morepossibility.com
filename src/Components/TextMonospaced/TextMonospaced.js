import React from 'react';
import styles from './TextMonospaced.module.css';

// TODO replace with entropy-ui version in 0.3
const ClassInjector = ({ children, className, ...props }) => {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: `${
        child.props.className ? child.props.className : ''
      } ${className}`,
    })
  );
};

export const TextMonospaced = ({ children }) => {
  return (
    <ClassInjector className={styles.monospaced}>{children}</ClassInjector>
  );
};
