import React from 'react';
import { FlexColumn } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
//import styles from './Microburn2019.module.css';

export const Microburn2019 = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Microburn 2021 Decor Collabs</PageHeading>
      <PageParagraph>
        The Microburn site has several beautiful yurts - I decorated one using a
        combination of LEDs and organza to create a beautiful cosy space to
        chill in.
      </PageParagraph>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2019/yurt-organza-4.jpg`}
          name={`View of the decoration entering the yurt. This installation was battery powered - a useful option for the system given the remote location of the yurt.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2019/organza-orbs-1.jpg`}
          name={`I made these orbs with LED clusters specifically for this installation - each has 20 individual LEDs to create entrancing patterns.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2019/yurt-organza-2.jpg`}
          name={`View from the bed in the yurt - a very relaxing place to rest!`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2019/yurt-organza-3.jpg`}
          name={`Rather 'bridal' colour scheme - this would be a wonderful decor setup for a wedding!`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2019/yurt-organza-5.jpg`}
          name={`A closeup showing another colour scheme - the software allows for infinite customisation, but is very simple to use.`}
        />
      </FlexColumn>
    </PageSection>
  );
};
