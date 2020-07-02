import React from 'react';
import {
  PageHeading,
  PageSubHeading1,
  PageParagraph,
  PageSection,
} from 'Components';

export const Contact = ({ className = '' }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Contact</PageHeading>
      <PageParagraph>I can be found on various sites.</PageParagraph>
      <PageSubHeading1>
        <a href="https://github.com/ashleybaldock">GitHub</a>
      </PageSubHeading1>
      <PageSubHeading1>
        <a href="https://www.linkedin.com/in/ashleybaldock/">LinkedIn</a>
      </PageSubHeading1>
      <PageSubHeading1>
        <a href="https://www.instagram.com/more.possibility/">Instagram</a>
      </PageSubHeading1>
    </PageSection>
  );
};
