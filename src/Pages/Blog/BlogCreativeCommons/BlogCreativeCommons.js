import React from 'react';
import { TextMonospaced } from 'Components';
import styles from './BlogCreativeCommons.module.css';

export const BlogCreativeCommons = ({ className = '', children, ...props }) => {
  return (
    <TextMonospaced>
      <p
        className={styles.creativeCommons}
        {...{
          'xmlns:cc': 'http://creativecommons.org/ns#',
          'xmlns:dct': 'http://purl.org/dc/terms/',
        }}
      >
        <a
          className={styles.link}
          property="dct:title"
          rel="cc:attributionURL"
          href="https://morepossibility.com/blog"
        >
          This blog of More Possibility
        </a>{' '}
        is licensed under{' '}
        <a
          className={styles.link}
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
        >
          CC BY-NC-SA 4.0
          <img
            alt=""
            className={styles.icon}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          />
          <img
            alt=""
            className={styles.icon}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          />
          <img
            alt=""
            className={styles.icon}
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
          />
          <img
            alt=""
            className={styles.icon}
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
          />
        </a>
      </p>
    </TextMonospaced>
  );
};
