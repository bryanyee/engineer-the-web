import Layout from '../../components/Layout';

import { findPage } from '../../lib/pages';

const page = findPage('untangling-react-fiber');

export default function AVisualDiveIntoReactFiber() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>This is the first post.</p>
    </Layout>
  );
}

