import React from 'react';
import {
  Art,
  Blog,
  Code,
  Contact,
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
import { FlexColumn, FlexSpacer } from 'entropy-ui';
import styles from './App.module.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <FlexColumn
        flex={'1 1 0'}
        justifyContent={'flex-start'}
        className={`${styles.app} ${styles.background}`}
      >
        <TopNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/me">About</NavLink>
          <NavLink to="/art">Art</NavLink>
          <NavLink to="/code">Code</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </TopNav>
        <Page>
          <Switch>
            <Route exact path={['/welcome', '/']}>
              <Welcome />
            </Route>
            <Route path="/sitemap">
              <Sitemap />
            </Route>
            <Route path="/me/services">
              <Services />
            </Route>
            <Route path="/me">
              <Me />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/art/phenoforge1">
              <PhenoforgeMkI />
            </Route>
            <Route path="/art/phenoforge2">
              <PhenoforgeMkII />
            </Route>
            <Route path="/art/phenoforge">
              <Phenoforge />
            </Route>
            <Route path="/art">
              <Art />
            </Route>
            <Route path="/code/entropy-ui">
              <EntropyUI />
            </Route>
            <Route path="/code/magiclights">
              <Magiclights />
            </Route>
            <Route path="/code/sixornot">
              <SixOrNot />
            </Route>
            <Route path="/code/localhost">
              <Localhost />
            </Route>
            <Route path="/code">
              <Code />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <FlexSpacer />
          <Footer>
            Copyright Ashley Baldock 2020. All rights reserved.
          </Footer>
        </Page>
      </FlexColumn>
    </BrowserRouter>
  );
};
