import React from "react";
import NextLink from "next/link";

export default function Link({ children, href, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <a>{children}</a>
    </NextLink>
  );
}
