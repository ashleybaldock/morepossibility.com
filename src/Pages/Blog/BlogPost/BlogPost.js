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

      <PageSubHeading1>The joy of iteration</PageSubHeading1>
      <BlogDateStamp>29-08-2021</BlogDateStamp>
      <PageParagraph>
        I've been making parts for an art project recently, which is part of an
        ongoing larger project to produce a modular system for creating art.
        It's interesting conceptually how rapid iteration and applying the
        principle of 'just enough' can get you toward a goal.
      </PageParagraph>

      <PageParagraph>
        Initially I started out using the technologies and techniques I knew to
        build what worked. In this case that was a bit of wood with some
        plug-and-play electronic components crudely screwed to it. It worked and
        allowed me to focus on the software.
      </PageParagraph>

      <PageParagraph>
        Then came new requirements - it needs to be waterproof and modular. Take
        what's there and modify it to add in those new things. At the same time
        my knowledge of how to make stuff is improving, and my awareness of
        available products and manufacturing techniques likewise.
        Encapsulating/integrating parts into a cohesive whole is tricky. You
        need to avoid prematurely optimising the system before you know what it
        needs to actually do, but also produce test prototypes to validate your
        assumptions.
      </PageParagraph>

      <PageParagraph>
        This led to questions around modular cabling - more to learn - power
        supply, which brings with it issues of safety. How do you mitigate the
        risks associated with high voltage AC while still effectively
        transmitting power over distances too long for 5V DC to work
        effectively. That led to compromises which inform the design of the
        system. Non-functional requirements.
      </PageParagraph>

      <PageParagraph>
        Constraints play a huge part in the design process too. The most
        fundamental constraints are your own knowledge, apparent physical
        realities, time space and money. Fortunately we live in a world where a
        huge amount of work has been done by others to create an ecosystem of
        freely available high quality software and hardware that can be
        integrated to produce really magical things. This, combined with some
        happy happenstance led to my choice of things like the FadeCandy and
        Raspberry Pi platforms to work with. Later I've been experimenting with
        optimising for cost/hardware size with the ESP 32 platform and others -
        but initially using what worked already, and what enabled me to make
        rapid progress with the novel aspects of what I was doing, was a huge
        boon.
      </PageParagraph>

      <PageParagraph>
        Producing prototypes, even imperfect ones, to enable you to integrate
        and test things in the real world and iterate toward your overall goal
        (or even to inform new goals as you adapt to changing circumstances) is
        important too. Rapid feedback and agility in development mean you don't
        waste time building something which just won't work, or if you do you
        minimise the wastage and learn something. In the end, the learning you
        get from doing is the most valuable part of the process.
      </PageParagraph>

      <PageParagraph>
        This led to the 'fluxnode' concept, modular boxes containing LED control
        and power supply hardware, networked together to enable scalable
        lighting displays. Still a work in progress but that's the joy of
        iterating. I've recently been learning CAD and 3D printing, which is a
        transformational technology for producing parts - especially 'glue' to
        combine other readily available components. This is the Unix tools
        philosophy in hardware, use modular components that work well and write
        just enough 'code' to stick them together efficiently. I'm going to be
        working on uploading .stl files to Thingiverse soon.
      </PageParagraph>

      <PageParagraph>
        Even in this, iteration and prototyping is useful. I didn't worry about
        creating a perfect mounting for my circuit board, I made one which works
        and then refined it. The rapid nature of 3D printing enables this and
        it's a huge game changer for design and development. The thing which has
        made human progress speed up so much in the past few decades is how
        rapidly you can change software and when you can tweak a 3D model, print
        it and see how it works in the space of hours or minutes, it starts to
        make sense to apply the same methodology to physical things as virtual
        ones - at least to some extent. The 'compile' time for printing a model,
        and the waste of actual resources involved are now pretty low but still
        higher than for code.
      </PageParagraph>

      <PageParagraph>
        Even this blog has the same approach. Write just enough code to get
        started, and then iterate on it over time. The most important thing is
        to make small incremental steps toward both your goal, and informing
        what your goal is.
      </PageParagraph>

      <PageParagraph className={styles.commentLink}>
        <a
          href={'https://github.com/ashleybaldock/morepossibility.com/compare'}
        >
          Add a comment
        </a>
      </PageParagraph>

      <PageSubHeading1>Hello (again) World</PageSubHeading1>
      <BlogDateStamp>28-08-2021</BlogDateStamp>
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
