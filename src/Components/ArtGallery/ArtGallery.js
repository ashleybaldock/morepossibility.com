import React from 'react';

export const ArtGallery = ({ className = '', children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};
