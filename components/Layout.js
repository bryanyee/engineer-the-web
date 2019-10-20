import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import Header from './Header';

import '../styles/global.scss';

import css from './styles/layout.scss'

const Layout = ({ date, children, hideHeader, title }) => (
  <Fragment>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
    <div className={`container ${css.layout}`}>
      {!hideHeader && <Header />}
      {title && <h1 className="mb-1">{title}</h1>}
      {date && <div className="mb-5"><small>{date}</small></div>}
      {children}
    </div>
  </Fragment>
);

Layout.defaultProps = {
  date: null,
  hideHeader: false,
  title: null,
};

Layout.propTypes = {
  date: PropTypes.string,
  hideHeader: PropTypes.bool,
  title: PropTypes.string,
};

export default Layout;
