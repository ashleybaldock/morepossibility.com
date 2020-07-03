import React from 'react';
import { FlexColumn, FlexRow, FlexSpacer } from 'entropy-ui';
import { Puzzle } from 'Components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styles from './TopNav.module.css';

const HamburgerIcon = ({ onClick }) => {
  return (
    <div className={styles.hamburger} onClick={onClick}>
      <FlexColumn
        flex={'1 0 0'}
        justifyContent={'center'}
        wrapperElement={
          <a href="#om" aria-label="Open main menu">
            Open Menu
          </a>
        }
      >
        <span className={styles.hamLine} aria-hidden="true"></span>
        <span className={styles.srOnly}>Open main menu</span>
        <span className={styles.hamLine} aria-hidden="true"></span>
        <span className={styles.hamLine} aria-hidden="true"></span>
      </FlexColumn>
    </div>
  );
};

export const TopNav = ({ className = '', children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [pageOpenedWithHash, setPageOpenedWithHash] = React.useState(false);

  const history = useHistory();

  // In the unlikely event of coming to the app with the fallback page
  // hash already in the path, remove it
  React.useEffect(() => {
    if (history.location.hash === '#om') {
      history.replace({ ...history.location, hash: '' });
      setPageOpenedWithHash(true);
    }
  }, [history]);

  return (
    <>
      <FlexRow
        id="om"
        flex={'0 0 auto'}
        className={`${styles.aboveSticky} ${
          !pageOpenedWithHash ? styles.menuTarget : ''
        }`}
      ></FlexRow>
      <FlexRow
        wrapperElement={<header></header>}
        flex={'0 0 auto'}
        alignItems={'stretch'}
        className={`${styles.sticky} ${menuOpen ? styles.menuOpen : ''}`}
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
        <FlexRow
          wrapperElement={<nav role="navigation"></nav>}
          flex={'0 0 0'}
          className={styles.mainMenu}
        >
          <a
            href="#/"
            className={styles.backdrop}
            tabIndex="-1"
            aria-hidden="true"
            hidden
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
          >
            &nbsp;
          </a>
          <ul className={styles.mainMenuList}>
            <li className={styles.menuHeader}>
              <HamburgerIcon
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(true);
                }}
              />
            </li>
            {React.Children.map(children, (child) => (
              <li className={styles.menuItem}>
                <FlexColumn
                  flex={'1 0 0'}
                  justifyContent={'center'}
                  alignItems={'flex-end'}
                  wrapperElement={React.cloneElement(child, {
                    activeClassName: styles.active,
                    exact: true,
                    className: `${
                      child.props.className ? child.props.className : ''
                    } ${styles.navLink}`,
                    onClick: () => setMenuOpen(false),
                  })}
                >
                  {child.props.children}
                </FlexColumn>
              </li>
            ))}
          </ul>
        </FlexRow>
      </FlexRow>
      <FlexRow flex={'0 0 auto'} className={styles.belowSticky}></FlexRow>
    </>
  );
};
