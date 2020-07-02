import React from 'react';
import { FlexColumn } from 'entropy-ui';
import { Puzzle, PuzzlePiece } from 'Components';
import { Link } from 'react-router-dom';
import styles from './Sitemap.module.css';

export const Sitemap = ({ className = '', children, ...props }) => {
  return (
    <FlexColumn className={`${styles.c} ${className}`}>
      <Puzzle
        a={<PuzzlePiece name={`Welcome`} link={<Link path={`/welcome`} />} />}
        b={<PuzzlePiece name={`Me`} link={<Link path={`/me`} />} />}
        d={
          <PuzzlePiece
            name={`Services`}
            link={<Link path={`/me/services`} />}
          />
        }
        c={<PuzzlePiece name={`Blog`} link={<Link path={`/blog`} />} />}
        e={<PuzzlePiece name={`Art`} link={<Link path={`/art`} />} />}
        f={
          <PuzzlePiece
            name={`Phenoforge`}
            link={<Link path={`/art/phenoforge`} />}
          />
        }
        g={<PuzzlePiece name={`Tools`} link={<Link path={`/tools`} />} />}
        h={
          <PuzzlePiece
            name={`Magiclights`}
            link={<Link path={`/tools/magiclights`} />}
          />
        }
        i={
          <PuzzlePiece
            name={`SixOrNot`}
            link={<Link path={`/tools/sixornot`} />}
          />
        }
        j={<PuzzlePiece name={`Contact`} link={<Link path={`/contact`} />} />}
        k={
          <PuzzlePiece name={`Email`} link={<Link path={`/contact/email`} />} />
        }
        l={
          <PuzzlePiece
            name={`GitHub`}
            link={<Link path={`/contact/github`} />}
          />
        }
        m={
          <PuzzlePiece
            name={`Instagram`}
            link={<Link path={`/contact/instagram`} />}
          />
        }
        n={
          <PuzzlePiece
            name={`LinkedIn`}
            link={<Link path={`/contact/linkedin`} />}
          />
        }
      />
    </FlexColumn>
  );
};
