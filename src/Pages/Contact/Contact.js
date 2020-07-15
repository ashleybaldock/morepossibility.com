import React from 'react';
import {
  FlexRow,
  SocialLink,
  InstagramIcon,
  EmailIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from 'entropy-ui';
import { PageHeading, PageSubHeading1, PageSection } from 'Components';
import styles from './Contact.module.css';

export const socialLinks = [
  {
    core: true,
    text: 'Instagram',
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/more.possibility',
  },
  {
    core: false,
    text: 'YouTube',
    icon: <YouTubeIcon />,
    href: 'https://www.youtube.com/channel/UC_xZBH-1MsJkh3S-u5TttJA',
  },
  {
    core: true,
    text: 'GitHub',
    icon: <GitHubIcon />,
    href: 'https://github.com/ashleybaldock',
  },
  {
    core: false,
    text: 'Facebook',
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/morepossibility',
  },
  {
    core: true,
    text: 'LinkedIn',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/ashleybaldock',
  },
  {
    core: true,
    text: 'Email',
    icon: <EmailIcon />,
    href: 'mailto:ashley@morepossibility.com',
  },
];

export const Contact = ({ className = '' }) => {
  return (
    <PageSection className={className}>
      <PageHeading>Connect</PageHeading>
      <FlexRow flexWrap={'wrap'}>
        {socialLinks.map(({ text, icon, href }, i) => (
          <PageSubHeading1
            key={i}
            alignItems={'center'}
            flex={'0 0 auto'}
            wrapperElement={
              <SocialLink
                className={styles.socialLink}
                iconClassName={styles.circleFrame}
                icon={icon}
                href={href}
              ></SocialLink>
            }
          >
            {text}
          </PageSubHeading1>
        ))}
      </FlexRow>
    </PageSection>
  );
};
