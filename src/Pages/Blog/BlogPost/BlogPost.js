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
      <PageSubHeading1>The Cookie Monster</PageSubHeading1>
      <BlogDateStamp>05-09-2021</BlogDateStamp>
      <PageParagraph>
        I'm involved in a project at the moment to ensure compliance with the{' '}
        <a href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/">
          law surrounding cookies
        </a>
        . For those that don't know, a cookie is just a somewhat persistent
        client-side data storage mechanism used by web browsers to enable a
        variety of functionality in the modern web. There's actually other more
        modern technologies for client-side data persistence but the law covers
        that too. They have become a bit of a distraction in the discussion
        about privacy.
      </PageParagraph>

      <PageParagraph>
        There's different uses for client-side data storage in developing web
        technologies. One key one is session management - ensuring that when a{' '}
        <a href="https://en.wikipedia.org/wiki/Stateless_protocol">
          fundamentally stateless
        </a>{' '}
        web browser agent is talking to a server that the server knows it is the
        same agent between requests. Another is storing customisation/user info
        locally for a site. There's all kinds of use cases but fundamentally
        it's a technology that allows some information to be left on your device
        by a server you communicate with that is then sent back to the server in
        future.
      </PageParagraph>

      <PageParagraph>
        This simple tool, like all tools, can be used for good or ill (and
        whether a particular use of a tool is good or ill is an exercise for the
        reader). Cookies can be used for tracking your use of the web, across
        multiple sites/domains. 'Third party' cookies are ones set by
        domains/sites other than the one you are accessing (websites/apps
        frequently pull in resources from a variety of places). Those third
        party cookies have traditionally been used as a fingerprinting mechanism
        to allow advertising and other businesses to track your activity across
        the Internet.
      </PageParagraph>

      <PageParagraph>
        Making people aware of the impacts that erosion of their privacy has on
        their lives is a worthy goal, but one which this law fails to really
        help with. It's a classic case of politicians wanting to appear as if
        they are doing something - by fixing a very visible effect of a problem
        - rather than legislating to bring about systemic change and address the
        actual issue.
      </PageParagraph>

      <PageParagraph>
        Currently every website that wishes to be compliant must implement its'
        own banner or notification that serves to inform users of how the site
        uses client-side persistence technologies. This is a vast implementation
        burden pushed down to the developers and maintainers of websites - and
        also leads to a very inconsistent user experience. It also (much like
        TLS/SSL warnings and other repetitive security/privacy theatre, e.g.
        long-winded privacy policies/terms of use) serves to get users used to
        clicking 'accept' because who has time for that?
      </PageParagraph>

      <PageParagraph>
        Even in the (rare) cases that a site goes to the trouble of actually
        providing education as to how these technologies work and their
        implications, and even if the user reads that and understands it, it
        still doesn't address the real issue -{' '}
        <a href="https://theconversation.com/googles-scrapping-third-party-cookies-but-invasive-targeted-advertising-will-live-on-156530">
          you don't need client side persistence to track people anymore
        </a>
        .
      </PageParagraph>

      <PageParagraph>
        So all this law is currently doing, really, is wasting developers' time,
        training users to ignore warnings/education about their privacy, and
        distracting from a very real growing issue around how large companies
        have a vast amount of latent power over the lives and wellbeing of
        people - both now and increasingly into an uncertain future.
      </PageParagraph>

      <PageParagraph>
        If I were to be involved in making law around educating users about
        client-side persistence technologies (and digital privacy more
        generally) I'd suggest requiring browser makers (and other portals to
        the internet) to provide actual useful education at point of first use.
        Ensure there's a consistent experience of consent based on adequate
        information, and focus on empowering people to navigate and leverage the
        digital world we are co-creating. Ideally via both modifications to the
        way that browsers/apps/devices and the Internet work, and via changes to
        the education system to start preparing people for the future.
      </PageParagraph>

      <PageSubHeading1>UK Age Appropriate Design Code</PageSubHeading1>
      <BlogDateStamp>02-09-2021</BlogDateStamp>
      <PageParagraph>
        Today the UK implements the{' '}
        <a href="https://5rightsfoundation.com/our-work/design-of-service/age-appropriate-design-code.html">
          Age Appropriate Design Code
        </a>{' '}
        a{' '}
        <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/ico-codes-of-practice/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/">
          set of standards
        </a>{' '}
        aimed at protecting children in their use of the Internet. This is
        broadly based on the{' '}
        <a href="https://downloads.unicef.org.uk/wp-content/uploads/2010/05/UNCRC_united_nations_convention_on_the_rights_of_the_child.pdf">
          United Nations Convention on the Rights of the Child
        </a>
        . This is actually quite a well thought out bit of legislation by the
        looks of things.
      </PageParagraph>

      <PageParagraph>
        But I am curious, why do these protections end when you turn 18? What
        exactly about that list of protections ought not to apply to someone at
        age 19, or 30, or 60? Why is the privacy of an adult worth so much less
        than the privacy of a child? Yes, this is based on the assumption that
        adults can consensually engage with their own privacy but that
        assumption is based on two things; that they are educated and empowered
        enough to be able to understand the systems they are using, and that
        those systems actually respect and make it possible (and at least
        somewhat easy) to actually implement those intentional conscious
        choices. And given the length and complexity of most services' privacy
        policies and terms of use, and the complexity of data protection
        legislation in differing jurisdictions, I think both of those points are
        laughable.
      </PageParagraph>

      <PageParagraph>
        How about this - replacing the word 'child' with the word 'user' - does
        this sound like an unreasonable expectation for the design of digital
        services? I certainly wouldn't mind if all digital systems had to
        conform to a code like this. (Modified from the text available on{' '}
        <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/ico-codes-of-practice/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/">
          ICO website
        </a>
        .)
      </PageParagraph>

      <ol>
        <li>
          <b>Best interests of the user:</b> The best interests of the user
          should be a primary consideration when you design and develop online
          services.
        </li>

        <li>
          <b>Data protection impact assessments:</b> Undertake a DPIA to assess
          and mitigate risks to the rights and freedoms of users accessing your
          service, which arise from your data processing. Take into account
          differing ages, capacities and development needs and ensure that your
          DPIA builds in compliance with this code.
        </li>

        <li>
          <b>Consistent application:</b> Apply the standards in this code to all
          your users.
        </li>

        <li>
          <b>Transparency:</b> The privacy information you provide to users, and
          other published terms, policies and community standards, must be
          concise, prominent and in clear language. Provide additional specific
          ‘bite-sized’ explanations about how you use personal data at the point
          that use is activated.
        </li>

        <li>
          <b>Detrimental use of data:</b> Do not use users' personal data in
          ways that have been shown to be detrimental to their wellbeing, or
          that go against industry codes of practice, other regulatory
          provisions or Government advice.
        </li>

        <li>
          <b>Policies and community standards:</b> Uphold your own published
          terms, policies and community standards (including but not limited to
          privacy policies, age restriction, behaviour rules and content
          policies).
        </li>

        <li>
          <b>Default settings:</b> Settings must be ‘high privacy’ by default
          (unless you can demonstrate a compelling reason for a different
          default setting, taking account of the best interests of the user).
        </li>

        <li>
          <b>Data minimisation:</b> Collect and retain only the minimum amount
          of personal data you need to provide the elements of your service in
          which a user is actively and knowingly engaged. Give users separate
          choices over which elements they wish to activate.
        </li>

        <li>
          <b>Data sharing:</b> Do not disclose users' data unless you can
          demonstrate a compelling reason to do so, taking account of the best
          interests of the user.
        </li>

        <li>
          <b>Geolocation:</b> Switch geolocation options off by default (unless
          you can demonstrate a compelling reason for geolocation to be switched
          on by default, taking account of the best interests of the user).
          Provide an obvious sign for users when location tracking is active.
          Options which make a user's location visible to others must default
          back to ‘off’ at the end of each session.
        </li>

        <li>
          <b>Parental controls:</b> If you provide controls that allow one user
          to control the actions of another, give the user appropriate
          information about this. If your online service allows a user to
          monitor another user's online activity or track their location,
          provide an obvious sign to the user when they are being monitored.
        </li>

        <li>
          <b>Profiling:</b> Switch options which use profiling ‘off’ by default
          (unless you can demonstrate a compelling reason for profiling to be on
          by default, taking account of the best interests of the user). Only
          allow profiling if you have appropriate measures in place to protect
          the user from any harmful effects (in particular, being fed content
          that is detrimental to their health or wellbeing).
        </li>

        <li>
          <b>Nudge techniques:</b> Do not use nudge techniques to lead or
          encourage users to provide unnecessary personal data or weaken or turn
          off their privacy protections.
        </li>

        <li>
          <b>Connected devices:</b> If you provide a connected device ensure you
          include effective tools to enable conformance to this code.
        </li>

        <li>
          <b>Online tools:</b> Provide prominent and accessible tools to help
          users exercise their data protection rights and report concerns.
        </li>
      </ol>

      <PageParagraph>
        Of course, this would severely affect the ease with which businesses can
        exploit their users for profit, so...
      </PageParagraph>

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
