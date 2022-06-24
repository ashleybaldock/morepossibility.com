import React from 'react';
import { FlexColumn } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
// import styles from './PhenoforgeMkII.module.css';

export const PhenoforgeMkII = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Phenoforge Mk.II (Debut @ Burning Nest 2022)</PageHeading>
      <PageParagraph>
        After a delay of 2 years, finally seeing this upgrade to my Phenoforge
        installation constructed and working was immensely satisfying.
      </PageParagraph>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/mkII-blue-cropped.jpg`}
          name={`Testing out graph-traversal based display mode (a little like LED lightning!)`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/mkII-red-geom.jpg`}
          name={`The increase in size, both height and width, really amplifies the sense of immersion while inside the dome.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/mkII-red-valley.jpg`}
          name={`A view of the dome from the hill above the valley - it was visible from all over the site.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/mkII-day.jpg`}
          name={`While it is most beautiful at night - the structure of the dome is revealed in daytime, offering a similar effect of splitting the view of the sky into window panes.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/mkII-build-2.jpg`}
          name={`This was the debut of this new structure - much learned from fully building it which will make it easy to put up in future!`}
        />
      </FlexColumn>
    </PageSection>
  );
};
