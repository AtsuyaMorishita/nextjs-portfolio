import Link from "next/link";

const Header = () => {
  return (
    <header>
      <span>ATSUYA BLOG</span>
      <ul>
        <li>
          <Link href="/">BLOG</Link>
        </li>
        <li>
          <Link href="/myApp">MYAPP</Link>
        </li>
        <li>
          <Link href="/profile">PROFILE</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
