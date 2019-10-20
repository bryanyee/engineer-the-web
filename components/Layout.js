import Header from './Header';

import css from './styles/layout.scss'

const Layout = props => (
  <div className={css.layout}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
