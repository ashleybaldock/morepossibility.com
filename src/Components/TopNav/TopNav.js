import React from 'react';
import { FlexColumn, FlexRow, FlexSpacer } from 'entropy-ui';
import { Puzzle } from 'Components';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css';

const navWrapper = <nav role="navigation"></nav>;

export const TopNav = ({ className = '', children, ...props }) => {
  return (
    <>
      <FlexRow flex={'0 0 auto'} className={styles.aboveSticky}></FlexRow>
      <FlexRow
        wrapperElement={navWrapper}
        flex={'0 0 auto'}
        flexWrap={'wrap'}
        alignItems={'stretch'}
        className={`${styles.topNav} ${className}`}
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
        {React.Children.map(children, (child) => (
          <FlexColumn>
            {React.cloneElement(child, {
              activeClassName: styles.active,
              exact: true,
              className: `${
                child.props.className ? child.props.className : ''
              } ${styles.child}`,
            })}
          </FlexColumn>
        ))}
      </FlexRow>
      <FlexRow flex={'0 0 auto'} className={styles.belowSticky}></FlexRow>
    </>
  );
};
