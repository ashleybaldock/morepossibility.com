import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  ArtGalleryItem,
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
import styles from './SixOrNot.module.css';

const IconListItem = ({ src, children }) => {
  return (
    <li
      className={styles.iconListItem}
      style={{ backgroundImage: `url('${src}')` }}
    >
      {children}
    </li>
  );
};

const sections = [
  {
    anchor: 'download',
    heading: 'Download',
    content: (
      <>
        <PageParagraph>
          You can download SixOrNot from the{' '}
          <a href="https://addons.mozilla.org/en-GB/firefox/addon/sixornot/">
            Mozilla Addons
          </a>{' '}
          page.
        </PageParagraph>
      </>
    ),
  },
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
          <ul className={styles.iconList}>
            <IconListItem src="/images/code/sixornot/proxy_on.png">
              This icon indicates that a proxy was used for the most recent
              connection to this host. On mouseover the tooltip gives
              information about the type of proxy used, as well as a warning if
              DNS lookups were disabled (see proxy section below).
            </IconListItem>
            <IconListItem src="/images/code/sixornot/trr.png">
              This icon indicates that DNS resolution for this host made use of
              the Trusted Recursive Resolver mechanism - see{' '}
              <a href="https://wiki.mozilla.org/Trusted_Recursive_Resolver">
                https://wiki.mozilla.org/Trusted_Recursive_Resolver
              </a>{' '}
              for more details.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_4only_cg_24.png">
              This icon indicates that Firefox connected to this domain using
              IPv4 and only A (IPv4) records were returned for the domain.
              Either your DNS is not capable of returning AAAA records or (more
              likely) the domain in question supports only the legacy version of
              the Internet Protocol suite. Why not ask why they haven't upgraded
              yet?{' '}
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_6and4_cg_24.png">
              This icon indicates that Firefox connected to this domain using
              IPv6 and both AAAA (IPv6) and A (IPv4) records were found for the
              domain in DNS. You should only ever see this icon if you have IPv6
              connectivity on your machine.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_4pot6_cg_24.png">
              This icon indicates that Firefox connected to this domain using
              IPv4 and both AAAA (IPv6) and A (IPv4) records were found for the
              current domain. While the remote domain does support IPv6 your
              browser did not use it to connect. Typically this means you do not
              have IPv6 connectivity on your machine, but even if you do
              sometimes IPv4 is used instead for connections.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_6only_cg_24.png">
              This icon indicates that Firefox connected to this domain using
              IPv6 and only AAAA (IPv6) records were found for the domain in
              DNS. This generally means that the domain in question only
              supports IPv6. You should only ever see this icon if you have IPv6
              connectivity on your machine.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_4only_cache_cg_24.png">
              This icon indicates that Firefox retrieved all objects in the
              current page from this domain from local cache (no external
              connections were made). Only A (IPv4) records were found for this
              domain in DNS, indicating that the domain is probably available
              only via IPv4.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_4pot6_cache_cg_24.png">
              This icon indicates that Firefox retrieved all objects in the
              current page from this domain from local cache (no external
              connections were made). Both AAAA (IPv6) and A (IPv4) records were
              found for this domain in DNS, indicating that the domain is IPv6
              capable.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_6only_cache_cg_24.png">
              This icon indicates that Firefox retrieved all objects in the
              current page from this domain from local cache (no external
              connections were made). Only AAAA (IPv6) records were found for
              this domain in DNS, indicating that the domain is probably
              available only via IPv6.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_proxy_cg_24.png">
              This icon indicates that an HTTP/HTTPS proxy was used for this
              connection. With these types of proxies no information is
              available about the connection made to the host (since Firefox
              connects to the proxy which then forwards the request). For these
              types of proxy DNS lookups are also disabled to avoid leaking
              information about sites visited.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_error_cg_24.png">
              This icon indicates an error occurred for the domain in question.
            </IconListItem>
            <IconListItem src="/images/code/sixornot/sixornot_other_cg_24.png">
              This icon can mean a variety of things, generally it indicates
              that no IP address information exists for the current location or
              that there was a failure obtaining it. Try navigating to a website
              and ensuring you are not using a Proxy and that Offline mode isn't
              enabled.
            </IconListItem>
          </ul>
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
            <ArtGalleryItem
              src="/images/code/sixornot/ss2.png"
              alt="Screenshot of the SixOrNot panel showing results for a visit to the Mozilla website"
            />
            <PageParagraph>
              Another example, here all connections are made over IPv6.
            </PageParagraph>
            <ArtGalleryItem
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

export const SixOrNot = () => {
  return (
    <PageSection>
      <PageHeading>SixOrNot</PageHeading>
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
