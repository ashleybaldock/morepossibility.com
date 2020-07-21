import React from 'react';
import { Link } from 'react-router-dom';
import { FlexColumn } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';

export const Code = ({ className = '' }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Code projects</PageHeading>
      <PageParagraph>
        See also my GitHub profile:{' '}
        <a href="https://github.com/ashleybaldock">github.com/ashleybaldock</a>
      </PageParagraph>
      <FlexColumn wrapperElement={<Link to={`/code/sixornot`}></Link>}>
        <ArtGalleryItem
          src={`/images/code/sixornot/sixornot_6only_c_256.png`}
          name={`SixOrNot`}
        />
      </FlexColumn>
      <FlexColumn wrapperElement={<Link to={`/code/entropy-ui`}></Link>}>
        <ArtGalleryItem
          src={`/images/code/sixornot/sixornot_6only_c_256.png`}
          name={`EntropyUI`}
        />
      </FlexColumn>
      <FlexColumn wrapperElement={<Link to={`/code/magiclights`}></Link>}>
        <ArtGalleryItem
          src={`/images/code/sixornot/sixornot_6only_c_256.png`}
          name={`Magiclights`}
        />
      </FlexColumn>
      <FlexColumn wrapperElement={<Link to={`/code/localhost`}></Link>}>
        <ArtGalleryItem
          src={`/images/code/sixornot/sixornot_6only_c_256.png`}
          name={`This Site`}
        />
      </FlexColumn>
    </PageSection>
  );
};
