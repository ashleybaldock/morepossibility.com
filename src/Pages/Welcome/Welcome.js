import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeading,
  PageParagraph,
  PageSection,
  ImageSplash,
} from 'Components';
export const Welcome = ({ className = '', ...props }) => {
  return (
    <>
      <ImageSplash src="/images/dome_soft.jpg" />
      <PageSection>
        <PageHeading>Welcome</PageHeading>
        <PageParagraph>
          More Possibility is all about creating <Link to={`/code`}>tools</Link>{' '}
          to enable artists to add light and movement to their projects. I do
          this through the use of inexpensive, widely available LED modules
          coupled with an intuitive, powerful, and elegant software interface.
        </PageParagraph>
        <PageParagraph>
          I also use this system to create my own art – small scale, especially
          through hacking existing lights to add movement and light, and large
          scale installations including the Phenoforge.
        </PageParagraph>
        <PageParagraph>
          I also offer{' '}
          <Link to={'/services'}>
            Software Development and Agile contract services
          </Link>
          , specialising in React/node.js web and app development.
        </PageParagraph>
      </PageSection>
    </>
  );
};
