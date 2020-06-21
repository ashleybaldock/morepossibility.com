import React from "react";
import { Link } from "react-router-dom";
import { Page, PageHeading, PageParagraph, SplashImage } from "Components";
import styles from "./Welcome.module.css";

export const Welcome = ({ className = "", ...props }) => {
  return (
    <>
      <SplashImage src="/images/dome_soft.jpg" />
      <PageHeading>Welcome</PageHeading>
      <PageParagraph>
        More Possibility is all about creating <Link to={`/tools`}>tools</Link>{" "}
        to enable artists to add light and movement into their projects through
        the use of cheap, available LED modules. Simple, intuitive, elegant
        software that enables powerful expression.
      </PageParagraph>
      <PageParagraph>
        I also use this system to create my own art – small scale, especially
        through hacking existing lights to add movement and light, and large
        scale installations including the Phenoforge.
      </PageParagraph>
      <PageParagraph>
        I also offer Software Development and Agile contract services.
      </PageParagraph>
      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PageParagraph>
      <PageParagraph>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
        gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
        risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
        eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
        fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a
        mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien,
        sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
        arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
        et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
        feugiat in, orci. In hac habitasse platea dictumst.
      </PageParagraph>
      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PageParagraph>
      <PageParagraph>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
        gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
        risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
        eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
        fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a
        mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien,
        sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
        arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
        et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
        feugiat in, orci. In hac habitasse platea dictumst.
      </PageParagraph>
      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PageParagraph>
      <PageParagraph>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
        gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
        risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
        eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
        fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a
        mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien,
        sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
        arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
        et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
        feugiat in, orci. In hac habitasse platea dictumst.
      </PageParagraph>
      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PageParagraph>
      <PageParagraph>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
        gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
        risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
        eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
        fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a
        mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien,
        sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
        arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
        et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
        feugiat in, orci. In hac habitasse platea dictumst.
      </PageParagraph>
      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PageParagraph>
      <PageParagraph>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
        gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
        risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
        eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
        fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a
        mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien,
        sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam
        arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
        et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
        feugiat in, orci. In hac habitasse platea dictumst.
      </PageParagraph>
    </>
  );
};
