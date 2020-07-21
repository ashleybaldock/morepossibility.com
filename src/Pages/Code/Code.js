import React from 'react';
import { Link } from 'react-router-dom';
import { FlexColumn, FlexRow } from 'entropy-ui';
import {
  ArtGalleryItem,
  PageHeading,
  PageParagraph,
  PageSection,
} from 'Components';
import styles from './Code.module.css';

export const Code = ({ className = '' }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Software Projects</PageHeading>
      <PageParagraph>
        See also my GitHub profile:{' '}
        <a href="https://github.com/ashleybaldock">github.com/ashleybaldock</a>
      </PageParagraph>
      <FlexRow flexWrap={'wrap'}>
        <FlexColumn
          className={styles.preview}
          wrapperElement={<Link to={`/code/entropy-ui`}></Link>}
        >
          <ArtGalleryItem
            src={`/images/code/entropy-ui/logo256.png`}
            name={`Entropy UI`}
          />
        </FlexColumn>
        <FlexColumn
          className={styles.preview}
          wrapperElement={<Link to={`/code/magiclights`}></Link>}
        >
          <ArtGalleryItem
            src={`/images/code/magiclights/logo256.png`}
            name={`Magiclights`}
          />
        </FlexColumn>
        <FlexColumn
          className={styles.preview}
          wrapperElement={<Link to={`/code/sixornot`}></Link>}
        >
          <ArtGalleryItem
            src={`/images/code/sixornot/logo256.png`}
            name={`SixOrNot`}
          />
        </FlexColumn>
        <FlexColumn
          className={styles.preview}
          wrapperElement={<Link to={`/code/localhost`}></Link>}
        >
          <ArtGalleryItem
            src={`/images/code/localhost/logo256.png`}
            name={`This Site`}
          />
        </FlexColumn>
      </FlexRow>
    </PageSection>
  );
};
