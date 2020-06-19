import React from 'react';
import styles from './ArtGalleryItem.module.css';

export const ArtGalleryItem = ({
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
