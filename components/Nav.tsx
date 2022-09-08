import NextLink from "next/link";
import { Link } from "react-router-dom";

export const Nav: React.FC<{ isFromNext: boolean }> = ({ isFromNext }) => {
  return (
    <nav>
      {isFromNext ? (
        <NextLink href="/">Home</NextLink>
      ) : (
        <Link to="/">Home</Link>
      )}
      {isFromNext ? (
        <NextLink href="/?redirect=/about">About</NextLink>
      ) : (
        <Link to="/about">About</Link>
      )}
      <NextLink href="/prerender">Prerender</NextLink>
    </nav>
  );
};
