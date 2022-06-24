import React from 'react';
import { FlexColumn, FlexRow } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
import styles from './PhenoforgeMkI.module.css';

export const PhenoforgeMkI = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Phenoforge (Burning Nest 2018 & 2019)</PageHeading>
      <PageParagraph>
        A minimalistic combination of geodesic geometry, 1760 individually
        addressable LEDs, and custom pattern generation software. This is the
        showpiece for my lighting system.
      </PageParagraph>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge1/phenoforge-1.jpg`}
          name={`Beauty shot from Burning Nest 2018.`}
        />
      </FlexColumn>
      <FlexColumn alignItems={'center'}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={`/images/art/phenoforge1/dusk-2019-patterns-1.mp4`}
            type={'video/mp4'}
          />
        </video>
        <FlexRow
          className={styles.text}
        >{`The display is stunning at dusk, set against the colours of the sunset. (Nest, 2019)`}</FlexRow>
      </FlexColumn>
      <FlexColumn alignItems={'center'}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={`/images/art/phenoforge1/purple-green-crowd-1.mp4`}
            type={'video/mp4'}
          />
        </video>
        <FlexRow
          className={styles.text}
        >{`Shining like a beacon at night - it tends to attract a crowd! (Nest, 2019)`}</FlexRow>
      </FlexColumn>
      <FlexColumn alignItems={'center'}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={`/images/art/phenoforge1/dusk-close-up.mp4`}
            type={'video/mp4'}
          />
        </video>
        <FlexRow
          className={styles.text}
        >{`A close up of the LEDs and dome structure. (Nest, 2019)`}</FlexRow>
      </FlexColumn>
      <FlexColumn>
        <ArtGalleryItem
          src={`/images/art/phenoforge1/red-crowd.jpg`}
          name={`First night fully working at Burning Nest in 2018 - it was amazing seeing so many people immediately enjoying something I'd made.`}
        />
      </FlexColumn>
      <FlexColumn alignItems={'center'}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={`/images/art/phenoforge1/dusk-2018-1.mp4`}
            type={'video/mp4'}
          />
        </video>
        <FlexRow
          className={styles.text}
        >{`Showing off chasing patterns at dusk in 2018.`}</FlexRow>
      </FlexColumn>
    </PageSection>
  );
};
