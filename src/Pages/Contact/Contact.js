import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArtGallery,
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';

export const Contact = ({ className = '' }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Contact</PageHeading>
      <PageParagraph>I can be found on various sites.</PageParagraph>
      <ArtGallery>
        <Link to={`/art/phenoforge2`}>
          <ArtGalleryItem
            src={`/images/art/phenoforge2/3d-model-1.png`}
            name={`Phenoforge Mk.II - 2021`}
          />
        </Link>
        <Link to={`/art/phenoforge1`}>
          <ArtGalleryItem
            src={`/images/art/phenoforge1/IMG_0286.jpg`}
            name={`Phenoforge - 2018,2019`}
          />
        </Link>
      </ArtGallery>
    </PageSection>
  );
};
