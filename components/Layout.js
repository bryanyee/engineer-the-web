import PropTypes from 'prop-types';
import { Fragment } from 'react';

import DefaultHeader from './DefaultHeader';
import DocumentHead from './DocumentHead';

import '../styles/global.scss';

import css from './styles/layout.scss'

const Layout = ({ date, children, header, title }) => (
  <Fragment>
    <DocumentHead />
    <div className={`container ${css.layout}`}>
      {header}
      {title && <h1 className="mb-1">{title}</h1>}
      {date && <div className="mb-5"><small>{date}</small></div>}
      {children}
    </div>
  </Fragment>
);

Layout.defaultProps = {
  date: null,
  header: <DefaultHeader />,
  title: null,
};

Layout.propTypes = {
  date: PropTypes.string,
  header: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
