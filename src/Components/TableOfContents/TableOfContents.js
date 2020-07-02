import React from 'react';
import styles from './TableOfContents.module.css';

export const TableOfContents = ({
  data,
  anchorKey,
  headingKey,
  contentKey,
  wrapLink = (text, anchor) => <a href={`#${anchor}`}>{text}</a>,
}) => {
  return (
    <ul className={styles.tocLevel}>
      {data.map((section) => (
        <>
          <li className={styles.tocLevelInner}>
            {wrapLink(section[headingKey], section[anchorKey])}
          </li>
          {Array.isArray(section[contentKey]) && (
            <li className={styles.noBullet}>
              <TableOfContents
                key={section[anchorKey]}
                data={section[contentKey]}
                anchorKey={anchorKey}
                headingKey={headingKey}
                contentKey={contentKey}
              />
            </li>
          )}
        </>
      ))}
    </ul>
  );
};
