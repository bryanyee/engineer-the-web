import Link from 'next/link';

import css from './styles/header.scss'

const Header = () => (
  <div>
    <Link href="/">
      <a className={css.link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={css.link}>About</a>
    </Link>
  </div>
);

export default Header;
