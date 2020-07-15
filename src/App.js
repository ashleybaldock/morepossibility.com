import React from 'react';
import {
  Art,
  Blog,
  Code,
  Contact,
  socialLinks,
  EntropyUI,
  Localhost,
  Magiclights,
  Me,
  NoMatch,
  Phenoforge,
  PhenoforgeMkI,
  PhenoforgeMkII,
  Services,
  Sitemap,
  SixOrNot,
  Welcome,
} from './Pages';
import { Footer, Page, TopNav } from 'Components';
import {
  BrowserTitle,
  FlexRow,
  FlexColumn,
  FlexSpacer,
  SocialLink,
} from 'entropy-ui';
import styles from './App.module.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// TODO use to generate breadcrumbs
const routes = [
  { path: ['/welcome', '/'], exact: true, name: 'Welcome', component: Welcome },
  { path: '/sitemap', name: 'Sitemap', component: Sitemap },
  {
    path: '/services',
    name: 'Development Services',
    shortName: 'Services',
    component: Services,
  },
  { path: '/me', name: 'About Me', shortName: 'About', component: Me },
  { path: '/blog', name: 'Blog', component: Blog },
  {
    path: '/art/phenoforge2',
    name: 'Phenoforge Mk.II',
    component: PhenoforgeMkII,
  },
  {
    path: '/art/phenoforge1',
    name: 'Phenoforge Mk.I',
    component: PhenoforgeMkI,
  },
  { path: '/art/phenoforge', name: 'Phenoforge', component: Phenoforge },
  { path: '/art', name: 'Art', component: Art },
  { path: '/code/entropy-ui', name: 'Entropy UI', component: EntropyUI },
  { path: '/code/magiclights', name: 'Magiclights', component: Magiclights },
  { path: '/code/sixornot', name: 'SixOrNot', component: SixOrNot },
  { path: '/code/localhost', name: 'This Site', component: Localhost },
  { path: '/code', name: 'Code', component: Code },
  { path: '/connect', name: 'Connect', component: Contact },
];

export const App = () => {
  return (
    <BrowserRouter>
      <BrowserTitle title={`More Possibility`} />
      <FlexColumn
        flex={'1 1 auto'}
        justifyContent={'flex-start'}
        className={styles.app}
      >
        <TopNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/art">Art</NavLink>
          <NavLink to="/code">Code</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/connect">Connect</NavLink>
        </TopNav>
        <Page>
          <Switch>
            {routes.map(({ path, exact = false, component }, key) => (
              <Route exact={exact} path={path} key={key} render={component} />
            ))}
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <FlexSpacer />
          <Footer className={styles.footer}>
            <Switch>
              <Route exact={true} path={'/connect'} />
              <Route>
                {socialLinks
                  .filter(({ core }) => core === true)
                  .map(({ text, icon, href }, i) => (
                    <FlexRow
                      key={i}
                      alignItems={'center'}
                      flex={'0 0 auto'}
                      wrapperElement={
                        <SocialLink
                          className={styles.socialLink}
                          icon={icon}
                          href={href}
                        ></SocialLink>
                      }
                    ></FlexRow>
                  ))}
              </Route>
            </Switch>
          </Footer>
        </Page>
      </FlexColumn>
    </BrowserRouter>
  );
};
