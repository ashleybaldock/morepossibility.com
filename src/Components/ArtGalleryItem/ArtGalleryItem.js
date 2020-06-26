import React from 'react';
import { FlexRow } from 'entropy-ui';
import styles from './ArtGalleryItem.module.css';

export const ArtGalleryItem = ({ className = '', src, name, ...props }) => {
  return (
    <FlexRow className={`${className}`}>
      <img src={src} alt={name} />
      {name}
    </FlexRow>
  );
};
