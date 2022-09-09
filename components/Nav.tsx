import NextLink from "next/link";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-daisyui";
import React, { forwardRef } from "react";

const NavButton = forwardRef<
  HTMLButtonElement,
  {
    children?: React.ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
>(({ children, href, onClick }, ref) => {
  return (
    <Button color="ghost" ref={ref} href={href} onClick={onClick}>
      {children}
    </Button>
  );
});

NavButton.displayName = "NavButton";

const ReactRouterLink: React.FC<{
  children?: React.ReactNode;
  isFromNext: boolean;
  href: string;
}> = ({ children, isFromNext, href }) => {
  return isFromNext ? (
    <NextLink href={`/?redirect=${href}`}>
      <NavButton>{children}</NavButton>
    </NextLink>
  ) : (
    <Link to={href}>
      <NavButton>{children}</NavButton>
    </Link>
  );
};

export const Nav: React.FC<{ isFromNext: boolean }> = ({ isFromNext }) => {
  return (
    <Navbar className="gap-2 bg-base-100 m-2 w-auto">
      <ReactRouterLink href="/" isFromNext={isFromNext}>
        Home
      </ReactRouterLink>
      <ReactRouterLink href="/about" isFromNext={isFromNext}>
        About
      </ReactRouterLink>
      <NextLink href="/prerender">
        <NavButton>Prerender</NavButton>
      </NextLink>
    </Navbar>
  );
};
