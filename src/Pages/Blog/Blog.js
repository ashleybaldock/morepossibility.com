import React from 'react';
import {
  PageHeading,
  PageParagraph,
  PageSection,
  TextMonospaced,
} from 'Components';
// import styles from './Blog.module.css';

export const Blog = ({ className = '' }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Blog</PageHeading>
      <TextMonospaced>
        <PageParagraph>{'// todo'}</PageParagraph>
      </TextMonospaced>
    </PageSection>
  );
};
