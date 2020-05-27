import React from "react";
// import { Welcome } from './Pages';
import { Puzzle, PuzzlePiece } from 'Components';
import styles from "./App.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const makeOnClick = (path) => () => 

export const App = () => {
  return (
    <Router>
      <div className={`${styles.page} ${styles.background}`}>
        <Puzzle
        a={<PuzzlePiece name={`Welcome`} link={<Link path={`/welcome`} />} />}
        a={<PuzzlePiece name={`Me`} link={<Link path={`/me`} />} />}
        a={<PuzzlePiece name={`Blog`} link={<Link path={`/blog`} />} />}
        a={<PuzzlePiece name={`Services`} link={<Link path={`/me/services`} />} />}
        b={<PuzzlePiece name={`Art`} link={<Link path={`/art`} />} />}
        b={<PuzzlePiece name={`Phenoforge`} link={<Link path={`/art/phenoforge`} />} />}
        b={<PuzzlePiece name={`Tools`} link={<Link path={`/tools`} />} />}
        b={<PuzzlePiece name={`Magiclights`} link={<Link path={`/tools/magiclights`} />} />}
        b={<PuzzlePiece name={`SixOrNot`} link={<Link path={`/tools/sixornot`} />} />}
        b={<PuzzlePiece name={`Contact`} link={<Link path={`/contact`} />} />}
        b={<PuzzlePiece name={`Email`} link={<Link path={`/contact/email`} />} />}
        b={<PuzzlePiece name={`GitHub`} link={<Link path={`/contact/github`} />} />}
        b={<PuzzlePiece name={`Instagram`} link={<Link path={`/contact/instagram`} />} />}
        b={<PuzzlePiece name={`LinkedIn`} link={<Link path={`/contact/linkedin`} />} />}
      />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
