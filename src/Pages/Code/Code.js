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
      <PageHeading>Art projects</PageHeading>
      <PageParagraph>
        I like to create art using software and LED lighting.
      </PageParagraph>
      <ArtGallery>
        <Link to={`/code/sixornot`}>
          <ArtGalleryItem
            src={`/images/art/phenoforge2/3d-model-1.png`}
            name={`Phenoforge Mk.II - 2021`}
          />
        </Link>
      </ArtGallery>
    </PageSection>
  );
};
