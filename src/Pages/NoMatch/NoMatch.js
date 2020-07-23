import React from 'react';
import { PageHeading, PageSection } from 'Components';
// import styles from './NoMatch.module.css';

export const NoMatch = ({ className = '' }) => {
  return (
    <PageSection className={className}>
      <PageHeading>404 - Page not found</PageHeading>
    </PageSection>
  );
};
