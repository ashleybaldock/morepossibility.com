import React from 'react';
import {
  PageHeading,
  PageParagraph,
  PageSection,
  PageSubHeading1,
} from 'Components';
import { BlogDateStamp } from '../BlogDateStamp';
import { BlogCreativeCommons } from '../BlogCreativeCommons';
import styles from './BlogPost.module.css';

export const BlogPost = ({ className = '', children, ...props }) => {
  return (
    <PageSection className={`${className}`}>
      <PageHeading>Blog</PageHeading>
      <PageSubHeading1>Hello (again) World</PageSubHeading1>
      <BlogDateStamp>29-08-2021</BlogDateStamp>
      <PageParagraph>
        When I was young, I wrote a blog. The internet was new back then,
        exciting, different. That was the 90s and the 00s, the world looked
        pretty good then - things seemed quite hopeful.
      </PageParagraph>

      <PageParagraph>
        Then the world got busy, and social media took over from blogging, and I
        lost my voice somehow through change and the necessity of life. I
        started blogging to friends, instead of to the world, spilling my heart
        in chat rather than online. It's not quite the same. You can post on
        social media and not know who will hear you - algorithms decide how to
        best market your voice to manipulate others. I am not content, I am not
        for sale.
      </PageParagraph>

      <PageParagraph>
        I don't know if anyone will read this. I don't really mind. We live in a
        post-privacy society now, there's a certain inertia to things. Obviously
        this isn't my full voice, it's what I think won't come back to bite me,
        which is sad. But it's better than nothing.
      </PageParagraph>

      <PageParagraph>
        If I keep it going, expect to see musings on philosophy, inevitability,
        technology, society - who knows. Mostly I just needed a first post to
        start building a blog engine around. Let's see how this goes.
      </PageParagraph>
      <PageParagraph className={styles.commentLink}>
        <a
          href={'https://github.com/ashleybaldock/morepossibility.com/compare'}
        >
          Add a comment
        </a>
      </PageParagraph>
      <BlogCreativeCommons />
    </PageSection>
  );
};
