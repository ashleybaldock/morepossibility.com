import React from 'react';
import { Link } from 'react-router-dom';
import { FlexColumn } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';

export const Art = ({ className = '' }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Art projects</PageHeading>
      <PageParagraph>
        I like to create art using software and LED lighting. Select an
        installation below for more information.
      </PageParagraph>
      <FlexColumn wrapperElement={<Link to={`/art/phenoforge2`}></Link>}>
        <ArtGalleryItem
          src={`/images/art/phenoforge2/3d-model-1.png`}
          name={`Phenoforge Mk.II - 2022 ?`}
        />
      </FlexColumn>
      <FlexColumn wrapperElement={<Link to={`/art/phenoforge1`}></Link>}>
        <ArtGalleryItem
          src={`/images/art/phenoforge1/IMG_0286.jpg`}
          name={`Phenoforge - 2018, 2019`}
        />
      </FlexColumn>
    </PageSection>
  );
};
