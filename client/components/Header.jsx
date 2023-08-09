import Link from "next/link";

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ href, label }) => {
      return (
        <li key={href}>
          <Link href={href} className="nav-item" key={href}>
            {label}
          </Link>
        </li>
      );
    });
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">GitTix</Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex aligh-items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
