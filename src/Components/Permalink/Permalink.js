import React from 'react';
import styles from './Permalink.module.css';

export const Permalink = ({ hash, children }) => {
  return (
    <>
      <div className={styles.idAnchor} id={hash}></div>
      {children}
    </>
  );
};
