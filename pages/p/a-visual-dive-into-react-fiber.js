import Layout from '../../components/Layout';

import PAGES from '../pages';

const page = PAGES.find(({ id }) => id = 'a-visual-dive-into-react-fiber');

export default function AVisualDiveIntoReactFiber() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>This is the first post.</p>
    </Layout>
  );
}
