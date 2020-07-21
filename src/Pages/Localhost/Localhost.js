import React from 'react';
import { PageHeading, PageParagraph, PageSection } from 'Components';
// import styles from './Localhost.module.css';

export const Localhost = ({ className }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>About this website</PageHeading>
      <PageParagraph>
        I created this site by hand using React; source code is available{' '}
        <a href="https://github.com/ashleybaldock/morepossibility.com">
          on GitHub
        </a>
        .
      </PageParagraph>
      <PageParagraph>
        For speed, the site is pre-compiled using{' '}
        <a href="https://www.npmjs.com/package/react-snapshot">
          react&#8209;snapshot
        </a>
        . Routing uses{' '}
        <a href="https://www.npmjs.com/package/react-router">
          react&#8209;router
        </a>
        . A lot of the layout and components come from my{' '}
        <a href="https://entropy-ui.netlify.app">UI&nbsp;library</a> - component
        libraries already exist, but I wanted to learn. The site is hosted via{' '}
        <a href="https://www.netlify.com/">Netlify</a>.
      </PageParagraph>
    </PageSection>
  );
};
