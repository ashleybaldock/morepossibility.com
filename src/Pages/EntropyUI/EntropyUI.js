import React from 'react';
import { PageHeading, PageParagraph, PageSection } from 'Components';
// import styles from './EntropyUI.module.css';

export const EntropyUI = ({ className = '' }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Entropy UI</PageHeading>
      <PageParagraph>
        A chaotic React component library. Very much in development,
        encompassing a variety of presentational and functional components I've
        developed in the course of making projects.
      </PageParagraph>
      <PageParagraph>
        See demos in the project{' '}
        <a href="https://entropy-ui.morepossibility.com">Storybook</a>. For the
        source, see{' '}
        <a href="https://github.com/ashleybaldock/entropy-ui">GitHub</a>.
      </PageParagraph>
    </PageSection>
  );
};
