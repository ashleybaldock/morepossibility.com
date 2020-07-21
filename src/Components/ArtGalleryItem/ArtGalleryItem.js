import React from 'react';
import { FlexColumn, FlexRow } from 'entropy-ui';
import styles from './ArtGalleryItem.module.css';

export const ArtGalleryItem = ({
  className = '',
  src,
  name = '',
  alt = null,
  ...props
}) => {
  return (
    <FlexColumn
      className={`${styles.artGalleryItem} ${className}`}
      alignItems={'center'}
    >
      <FlexRow className={styles.image}>
        <img className={styles.img} src={src} alt={alt === null ? name : alt} />
      </FlexRow>
      {name !== null && <FlexRow className={styles.text}>{name}</FlexRow>}
    </FlexColumn>
  );
};
