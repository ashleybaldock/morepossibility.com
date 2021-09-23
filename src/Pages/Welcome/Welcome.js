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
          At More Possibility I build <Link to={`/code`}>tools</Link> which
          empower creative people to add light and magic to their projects. I do
          this through the use of LED modules coupled with an intuitive,
          powerful, and elegant software interface.
        </PageParagraph>
        <PageParagraph>
          I also use this system to create my <Link to={'/art'}>own art</Link>.
        </PageParagraph>
        <PageParagraph>
          Also available,{' '}
          <Link to={'/services'}>
            Software Development and Agile contract services
          </Link>
          , specialising in React/node.js web and app development.
        </PageParagraph>
      </PageSection>
    </>
  );
};
