import Link from 'next/link';
import React from 'react';

import css from './DefaultHeader.scss';

const DefaultHeader = () => (
  <Link href="/">
    <a className={css.link}><h3>Engineer The Web</h3></a>
  </Link>
);

export default DefaultHeader;
