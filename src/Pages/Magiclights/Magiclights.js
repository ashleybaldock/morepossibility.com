import React from 'react';
import { PageHeading, PageParagraph, PageSection } from 'Components';
// import styles from './Magiclights.module.css';

export const Magiclights = ({ className = '' }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Magiclights</PageHeading>
      <PageParagraph>
        A software and hardware platform for rapid prototyping of art
        installations involving LED lighting.
      </PageParagraph>
      <PageParagraph>
        The core of the system is a set of water- and dust-proof control boxes
        capable each of driving up to 512 individually addressable LEDs across 8
        channels. They can be networked together using WiFi to enable large
        installations driving thousands of LEDs. The control boxes are powered
        via a 12-24V DC feed (allowing power to come from 12V battery supply, or
        mains powered 24V supply). The system encompasses waterproof modular
        cabling to enable a variety of configurations.
      </PageParagraph>
      <PageParagraph>
        The control boxes run my custom firmware and software, which enables
        easy, expressive control over the LED patterns. The main input is
        images, which the system automatically displays across the LEDs in a
        variety of ways. This allows you to completely change the character of
        the output by simply uploading a new image and changing a few settings –
        no need to program complex algorithms.
      </PageParagraph>
      <PageParagraph>
        The control boxes are designed for rapid prototyping – you can use them
        to quickly build either temporary or prototype installations. The same
        hardware can be used to build more permanent installations using cheap
        ESP8266 or ESP32 controller chips.
      </PageParagraph>
    </PageSection>
  );
};
