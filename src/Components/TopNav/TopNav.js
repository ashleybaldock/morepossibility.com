import React from 'react';
import { FlexColumn, FlexRow, FlexSpacer } from 'entropy-ui';
import { Puzzle } from 'Components';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css';

const HamburgerIcon = () => {
  return (
    <div className={styles.hamburger}>
      <FlexColumn
        flex={'1 0 0'}
        justifyContent={'center'}
        wrapperElement={
          <a href="#om" aria-label="Open main menu">
            Open Menu
          </a>
        }
      >
        <span className={styles.srOnly}>Open main menu</span>
        <span className={styles.hamLine} aria-hidden="true"></span>
        <span className={styles.hamLine} aria-hidden="true"></span>
        <span className={styles.hamLine} aria-hidden="true"></span>
      </FlexColumn>
    </div>
  );
};

export const TopNav = ({ className = '', children }) => {
  return (
    <>
      <FlexRow flex={'0 0 auto'} className={styles.aboveSticky}></FlexRow>
      <FlexRow
        wrapperElement={<header></header>}
        flex={'0 0 auto'}
        alignItems={'stretch'}
        className={styles.sticky}
      >
        <FlexColumn
          alignSelf={'center'}
          wrapperElement={<Puzzle />}
          className={styles.logo}
        ></FlexColumn>
        <FlexColumn justifyContent={'center'} className={styles.title}>
          <Link to="/sitemap">More Possibility</Link>
        </FlexColumn>
        <FlexSpacer />
        <a
          href="#/"
          className={styles.backdrop}
          tabIndex="-1"
          aria-hidden="true"
          hidden
        >
          &nbsp;
        </a>
        <FlexRow
          wrapperElement={<nav role="navigation"></nav>}
          flex={'0 0 0'}
          className={styles.mainMenu}
        >
          <ul className={styles.mainMenuList}>
            {React.Children.map(children, (child) => (
              <FlexColumn wrapperElement={<li></li>}>
                <FlexColumn
                  flex={'1 0 0'}
                  justifyContent={'center'}
                  wrapperElement={React.cloneElement(child, {
                    activeClassName: styles.active,
                    exact: true,
                    className: `${
                      child.props.className ? child.props.className : ''
                    } ${styles.navLink}`,
                  })}
                >
                  {child.props.children}
                </FlexColumn>
              </FlexColumn>
            ))}
          </ul>
        </FlexRow>
        <HamburgerIcon />
      </FlexRow>
      <FlexRow flex={'0 0 auto'} className={styles.belowSticky}></FlexRow>
    </>
  );
};
