import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArtGallery,
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';

export const Code = ({ className = '' }) => {
  return (
    <PageSection>
      <PageHeading>Code projects</PageHeading>
      <PageParagraph>
        See also my GitHub profile:{' '}
        <a href="https://github.com/ashleybaldock">github.com/ashleybaldock</a>.
      </PageParagraph>
      <ArtGallery>
        <Link to={`/code/sixornot`}>
          <ArtGalleryItem
            src={`/images/code/sixornot/sixornot_6only_c_256.png`}
            name={`SixOrNot`}
          />
        </Link>
      </ArtGallery>
    </PageSection>
  );
};
