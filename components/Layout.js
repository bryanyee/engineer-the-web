import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import Header from './Header';

import '../styles/global.scss';

import css from './styles/layout.scss'

const Layout = ({ children, hideHeader}) => (
  <Fragment>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
    <div className={`container ${css.layout}`}>
      {!hideHeader && <Header />}
      {children}
    </div>
  </Fragment>
);

Layout.defaultProps = {
  hideHeader: false,
};

Layout.propTypes = {
  hideHeader: PropTypes.bool,
};

export default Layout;
