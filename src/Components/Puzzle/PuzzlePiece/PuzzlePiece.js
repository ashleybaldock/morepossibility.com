import React from 'react';
// import styles from './PuzzlePiece.module.css';

export const PuzzlePiece = ({
  name,
  link,
  piece = <></>,
  className = '',
  children,
  ...props
}) => {
  return React.Children.only(
    React.cloneElement(children, {
    })
  );
};
