import React from 'react';
import { FlexColumn, FlexRow } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
import styles from './Microburn2021.module.css';

export const Microburn2021 = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Art projects</PageHeading>
      <PageParagraph>
        I supplied lighting and creative consultation for a few different
        beautiful decor installations at Microburn in 2021.
      </PageParagraph>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/microburn2021/organza1.jpg`}
          name={`LEDs with organza in the Deadly White Shades structure`}
        />
      </FlexColumn>
      <FlexColumn alignItems={'center'}>
        <video autoPlay muted loop>
          <source
            src={'/images/art/microburn2021/tentacles1.mp4'}
            type={'video/mp4'}
          />
        </video>
        <FlexRow className={styles.text}>{`LEDs with industrial tubing creates a tentacle monster emerging from bushes`}</FlexRow>
      </FlexColumn>
    </PageSection>
  );
};
