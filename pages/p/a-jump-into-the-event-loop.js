import React from 'react';

import Layout from '../../components/Layout';

import { findPage } from '../../lib/pages';

const page = findPage('a-jump-into-the-event-loop');

export default function AJumpIntoTheEventLoop() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>This is the first post.</p>
    </Layout>
  );
}

