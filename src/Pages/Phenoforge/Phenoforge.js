import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArtGallery,
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';

export const Phenoforge = ({ className = '', children, ...props }) => {
  return (
    <PageSection>
      <PageHeading>Phenoforge</PageHeading>
      <PageParagraph>
        A geodesic dome covered in individually addressable LEDs. The first
        incarnation is a 5m diameter 2v dome with 1504 LEDs. Forthcoming Mk.II
        scales this up to a 6.6m 3v 5/8 dome and 4544 LEDs.
      </PageParagraph>
      <ArtGallery>
        <Link to={`/art/phenoforge`}>
          <ArtGalleryItem
            src={`/images/art/phenoforge2/3d-model-1.png`}
            name={`Phenoforge Mk.II`}
          />
          <ArtGalleryItem
            src={`/images/art/phenoforge1/IMG_0286.jpg`}
            name={`Phenoforge Mk.I`}
          />
        </Link>
      </ArtGallery>
    </PageSection>
  );
};
