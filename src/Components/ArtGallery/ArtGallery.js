import React from 'react';
import styles from './ArtGallery.module.css';

export const ArtGallery = ({
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
