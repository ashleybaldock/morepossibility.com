import React from 'react';
import { ClassInjector } from 'entropy-ui';
import styles from './TextMonospaced.module.css';

export const TextMonospaced = ({ children }) => {
  return (
    <ClassInjector className={styles.monospaced}>{children}</ClassInjector>
  );
};
