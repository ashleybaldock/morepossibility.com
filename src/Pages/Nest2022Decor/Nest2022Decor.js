import React from 'react';
import { FlexColumn } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
// import styles from './Nest2022Decor.module.css';

export const Nest2022Decor = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Burning Nest 2022 Decor Collab</PageHeading>
      <PageParagraph>
        I provided lighting equipment to decorate a camp at Burning Nest in
        2022. This included a large marquee area, and a bell tent - each having
        its' own independently controllable lighting zones. The colour scheme
        and patterns were varied to create different moods for various party
        nights.
      </PageParagraph>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/nest2022decor/bell-tent-1.jpg`}
          name={`Inside the bell tent - spiral LEDs wrapped in organza.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/nest2022decor/bell-tent-2.jpg`}
          name={`Inside the bell tent - spiral LEDs wrapped in organza.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/nest2022decor/marquee-1.jpg`}
          name={`Under the marquee, two sets of LEDs provided ample lighting - adjustable to suit a rave, or dimmed to provide an intimate atmosphere.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/nest2022decor/marquee-2.jpg`}
          name={`Under the marquee, two sets of LEDs provided ample lighting - adjustable to suit a rave, or dimmed to provide an intimate atmosphere.`}
        />
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/nest2022decor/marquee-3.jpg`}
          name={`Under the marquee, two sets of LEDs provided ample lighting - adjustable to suit a rave, or dimmed to provide an intimate atmosphere.`}
        />
      </FlexColumn>
    </PageSection>
  );
};
