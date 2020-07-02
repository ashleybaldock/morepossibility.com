import React from 'react';
import {
  LicenceBlock,
  PageHeading,
  PageSubHeading1,
  PageSubHeading2,
  PageParagraph,
  PageSection,
  Permalink,
  TableOfContents,
  TextEmphasis,
} from 'Components';
import { FlexColumn } from 'entropy-ui';
import { HashLink } from 'react-router-hash-link';
import styles from './SixOrNot.module.css';

const ImageCentered = ({ src, alt, className, ...props }) => {
  return (
    <FlexColumn flex={'1 1 auto'} className={styles.imageCentered}>
      <img src={src} alt={alt} {...props} />
    </FlexColumn>
  );
};

const sections = [
  {
    anchor: 'introduction',
    heading: 'Introduction',
    content: (
      <>
        <PageParagraph>
          SixOrNot is a Firefox extension which makes it easy for you to
          identify when the website you're connecting to supports the current
          generation Internet Protocol (version 6). It also allows you to see a
          list of all the servers contacted to load a page, along with the IP
          address your browser connected to to do so. DNS information about each
          server is also available so that you can see if a site could
          potentially be loaded via IPv6 if your local connection supported it
          (or to identify when connections were performed via IPv4 when they
          shouldn't have been). Also shown is information about any proxy used
          for the connection, and whether Trusted Recursive Resolver (TRR) was
          used to query DNS.
        </PageParagraph>
        <PageParagraph>
          The SixOrNot icon can be displayed via an address bar icon or a button
          (which may be placed wherever you like in the Firefox UI). The icon
          indicates whether the main domain of the site you are viewing supports
          IPv6 and whether your browser used IPv6 to connect to it. SixOrNot
          looks at each connection Firefox makes and notes whether it was made
          using IPv4 or IPv6, the information is then displayed via a handy
          tooltip.
        </PageParagraph>
      </>
    ),
  },
  {
    anchor: 'interface',
    heading: 'Interface',
    content: [
      {
        anchor: 'interface-overview',
        heading: 'Overview',
        content: (
          <>
            <PageParagraph>
              The SixOrNot interface consists of an icon displayed either in the
              address bar or as a button. By default the address bar icon is
              disabled and the button is placed onto the navigation bar. You can
              move the button anywhere you like by entering the Firefox UI
              customisation mode and dragging it to the desired location.
              Whether accessed through the button or address bar icon the
              functionality is identical. Upon clicking the button/icon a
              tooltip panel is displayed which shows information about the site
              you are connecting to.
            </PageParagraph>
            <PageParagraph>
              The main icon permits you to see at-a-glance whether the current
              site supports IPv6 and whether you are connecting to it via IPv6.
              See below for an explanation of each icon.
            </PageParagraph>
            <PageParagraph>
              For each domain contacted to load the current page a listing
              appears on the panel. The main domain of the site is displayed in
              bold text. The first line for each host entry tells you which
              hosts (by IP address) were used to load the page. This may include
              resources loaded from the local browser cache. The remaining
              addresses are those retrieved from DNS records for the domain.
            </PageParagraph>
            <PageParagraph>
              Subsequent entries in the list are for domains which additional
              resources have been loaded from, e.g. images from content delivery
              networks. Again, the first address is the actual connection, the
              rest are from DNS. You can click on the [+XX] link to expand DNS
              information for the secondary connections, and then click on the [
              - ] link to hide them again. The number to the left of the domain
              indicates the total number of connections made to that domain
              while loading this page.
            </PageParagraph>
            <PageParagraph>
              Each entry has a count of requests made, and may include
              additional informational icons as described below.
            </PageParagraph>
            <PageParagraph>
              The SixOrNot interface consists of an icon displayed either in the
              address bar or as a button. By default the address bar icon is
              disabled and the button is placed onto the navigation bar. You can
              move the button anywhere you like by entering the Firefox UI
              customisation mode and dragging it to the desired location.
              Whether accessed through the button or address bar icon the
              functionality is identical. Upon clicking the button/icon a
              tooltip panel is displayed which shows information about the site
              you are connecting to.
            </PageParagraph>
          </>
        ),
      },
      {
        anchor: 'interface-icons',
        heading: 'Icon Meanings',
        content: (
          <>
            <PageParagraph></PageParagraph>
          </>
        ),
      },
      {
        anchor: 'interface-example',
        heading: 'Examples',
        content: (
          <>
            <PageParagraph>
              This screenshot shows a typical display for the SixOrNot panel
              where you are browsing using an IPv4-only connection. The main
              domain is <TextEmphasis>www.mozilla.org</TextEmphasis>, which was
              loaded from the local browser cache (with a total of 11 requests),
              and has only A (IPv4) records in DNS. The main app icon is the
              same as the main domain icon in the panel. Two additional hosts
              were contacted to render this page,{' '}
              <TextEmphasis>www.googletagmanager.com</TextEmphasis> (loaded from
              Cache, DNS retrieved using TRR, the DNS records are currently
              hidden - you can view them by clicking the [+2] text - the icon
              indicates that the domain has both A (IPv4) and AAAA (IPv6) DNS
              records). <TextEmphasis>www.google-analytics.com</TextEmphasis>{' '}
              was loaded partly from cache, and partly from the host via IP
              address <TextEmphasis>216.58.206.78</TextEmphasis> - with a total
              of 3 requests made. DNS results include A and AAAA records, with
              the IP addresses listed.
            </PageParagraph>
            <PageParagraph>
              Something important to note is that on an IPv4-only connection
              sometimes DNS won't give you AAAA records for hosts. This is
              sytem/configuration dependant.
            </PageParagraph>
            <ImageCentered
              src="/images/code/sixornot/ss2.png"
              alt="Screenshot of the SixOrNot panel showing results for a visit to the Mozilla website"
            />
            <PageParagraph>
              Another example, here all connections are made over IPv6.
            </PageParagraph>
            <ImageCentered
              src="/images/code/sixornot/ss1.png"
              alt="Screenshot of the SixOrNot panel showing results for a visit to the Google homepage using only IPv6"
            />
          </>
        ),
      },
    ],
  },
  {
    anchor: 'licence',
    heading: 'SixOrNot Licence',
    content: (
      <>
        <LicenceBlock>
          <PageParagraph>
            Copyright © 2008-2020 Ashley Baldock. All Rights Reserved.
          </PageParagraph>
          <PageParagraph>
            Redistribution and use in source and binary forms, with or without
            modification, are permitted provided that the following conditions
            are met:
          </PageParagraph>
          <PageParagraph>
            1. Redistributions of source code must retain the above copyright
            notice, this list of conditions and the following disclaimer.
          </PageParagraph>
          <PageParagraph>
            2. Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
          </PageParagraph>
          <PageParagraph>
            3. The name of the author may not be used to endorse or promote
            products derived from this software without specific prior written
            permission from the author.
          </PageParagraph>
          <PageParagraph>
            4. Products derived from this software may not be called "SixOrNot"
            nor may "SixOrNot" appear in their names without specific prior
            written permission from the author.
          </PageParagraph>
          <PageParagraph>
            THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR
            IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
            ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
            DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
            DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
            GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
            INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
            IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
            OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
            IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          </PageParagraph>
        </LicenceBlock>
      </>
    ),
  },
];

const wrapWithHashLink = (text, anchor) => {
  return <HashLink to={`#${anchor}`}>{text}</HashLink>;
};

export const SixOrNot = ({ ...props }) => {
  return (
    <PageSection>
      <PageHeading>Code &gt; SixOrNot</PageHeading>
      <TableOfContents
        data={sections}
        anchorKey={'anchor'}
        headingKey={'heading'}
        contentKey={'content'}
        wrapLink={wrapWithHashLink}
      />
      {sections.map(({ anchor, heading, content }) => (
        <React.Fragment key={heading}>
          <Permalink hash={anchor}>
            <PageSubHeading1>{heading}</PageSubHeading1>
          </Permalink>
          {Array.isArray(content) ? (
            content.map(({ anchor, heading, content }) => (
              <>
                <Permalink hash={anchor}>
                  <PageSubHeading2>{heading}</PageSubHeading2>
                </Permalink>
                {content}
              </>
            ))
          ) : (
            <>{content}</>
          )}
        </React.Fragment>
      ))}
    </PageSection>
  );
};
