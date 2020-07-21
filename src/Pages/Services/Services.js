import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeading,
  PageSubHeading1,
  PageParagraph,
  PageSection,
} from 'Components';
// import styles from './Services.module.css';

export const Services = () => {
  return (
    <PageSection>
      <PageHeading>Professional Services</PageHeading>
      <PageSubHeading1>Software Development</PageSubHeading1>
      <PageParagraph>
        With a decade of experience developing software professionally, and a
        life-long passion for coding and technology outside of work, I can offer
        a wide skillset to help make any software project a success. I offer
        consultancy, contract development, and freelance services specialising
        in full-stack web and app development.
      </PageParagraph>
      <PageParagraph>
        I am particularly good with ReactJS (both React web and Native),
        JavaScript/ECMAScript and TypeScript. I am also experienced with Python,
        C/C++, and C#/.NET. I'm fully versed in testing techniques (including
        TDD), CI/CD technologies, project management, and agile delivery.
      </PageParagraph>
      <PageParagraph>
        Please see <Link to={'/cv'}>my CV</Link> for more, or{' '}
        <Link to={'/connect'}>connect with me</Link> to find out how I can bring
        value to your project.
      </PageParagraph>
      <PageSubHeading1>Lighting and Decor Design</PageSubHeading1>
      <PageParagraph>
        I design and build LED-based decor and lighting systems. Please see my{' '}
        <Link to={'/art'}>Art gallery</Link> for examples of past installations
        and projects. I accept commissions - for details on availability and
        pricing please <Link to={'/connect'}>get in touch</Link>.
      </PageParagraph>
      <PageParagraph>
        I use a combination of off-the-shelf and custom hardware, alongside
        custom software I have created to achieve beautiful lighting effects.
        Suitable for all kinds of spaces and events where carefully crafted,
        soft fading light is desirable. Fits well with receptions and weddings,
        chillout spaces, festivals etc. Works especially well decorating
        structures - examples I've worked with include marquees, yurts, geodesic
        domes, tents and of course fixed interiors like venues and warehouses.
      </PageParagraph>
      <PageParagraph>
        Lighting installations can be customised with your colour theme, and
        even be controlled in-situ via an easy to use tablet-based software
        interface. I've worked with spaces up to 100m², but larger areas are
        possible - the only limits are budget and imagination.
      </PageParagraph>
      <PageParagraph>
        I'm always looking for other artists to collaborate with in adding
        lighting to existing or developing sculpture/other art forms. If you're
        interested in using light, especially from LEDs, in your project but
        aren't sure where to start I can help.
      </PageParagraph>
    </PageSection>
  );
};
