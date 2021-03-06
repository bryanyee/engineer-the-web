import React from 'react';

import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

import { PAGES } from '../lib/pages';

export default function App() {
  return (
    <Layout
      header={<h1>Engineer The Web</h1>}
    >
      <p>
        <span>A web software engineering blog by </span>
        <a href="https://github.com/bryanyee" target="_blank" rel="noopener noreferrer">Bryan Yee</a>
        .
      </p>
      <div className="mt-5">
        {PAGES.map(({ date, enabled, id, title, }) => {
          if (!enabled) return null;
          return <PostLink className="mb-5" date={date} id={id} key={id} title={title} />;
        })}
      </div>
    </Layout>
  );
}
