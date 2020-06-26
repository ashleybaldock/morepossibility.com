import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeading,
  PageParagraph,
  PageSection,
  SplashImage,
} from 'Components';
export const Welcome = ({ className = '', ...props }) => {
  return (
    <>
      <SplashImage src="/images/dome_soft.jpg" />
      <PageSection>
        <PageHeading>Welcome</PageHeading>
        <PageParagraph>
          More Possibility is all about creating{' '}
          <Link to={`/tools`}>tools</Link> to enable artists to add light and
          movement to their projects through the use of inexpensive, widely available LED
          modules coupled with an intuitive, powerful, and elegant software interface.
        </PageParagraph>
        <PageParagraph>
          I also use this system to create my own art – small scale, especially
          through hacking existing lights to add movement and light, and large
          scale installations including the Phenoforge.
        </PageParagraph>
        <PageParagraph>
          I also offer Software Development and Agile contract services, specialising in React/node.js web and app development.
        </PageParagraph>
      </PageSection>
    </>
  );
};
