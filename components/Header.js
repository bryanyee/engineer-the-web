import Link from 'next/link';

import css from './styles/header.scss';

const Header = () => (
  <Link href="/">
    <a className={css.link}><h3>Engineer The Web</h3></a>
  </Link>
);

export default Header;
