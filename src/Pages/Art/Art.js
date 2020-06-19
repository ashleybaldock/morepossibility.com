import React from 'react';
import { Link } from "react-router-dom";
import { ArtGallery, ArtGalleryItem, Page, PageHeading, PageParagraph } from 'Components';
import styles from './Art.module.css';

export const Art = ({
  className = '',
  ...props
}) => {
  return (
    <Page className={`${className}`}>
      <PageHeading>
        Art projects
      </PageHeading>
      <PageParagraph>
        I like to create art using software and LED lighting.
      </PageParagraph>
      <ArtGallery>
        <Link to={`/art/phenoforge`}>
          <ArtGalleryItem src={`/images/phenoforge2.jpg`} name={`Phenoforge Mk.II`}/>
          <ArtGalleryItem src={`/images/phenoforge.jpg`} name={`Phenoforge`}/>
        </Link>
      </ArtGallery>
    </Page>
  );
};
