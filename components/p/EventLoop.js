import anime from 'animejs';
import React, { useEffect } from 'react';

import Layout from '../Layout';

import css from './EventLoop.scss';

import { findPage } from '../../lib/pages';

const page = findPage('a-jump-into-the-event-loop');

export default function EventLoop() {
  useEffect(() => {
    const timeline = anime.timeline({
      loop: true,
    });

    timeline
      .add({
        duration: 1000,
        easing: 'linear',
        loop: true,
        targets: `.${css.circle}`,
        translateX: 100,
        translateY: 100,
      })
      .add({
        duration: 1000,
        easing: 'linear',
        loop: true,
        targets: `.${css.circle}`,
        translateX: 0,
        translateY: 200,
      })
      .add({
        duration: 1000,
        easing: 'linear',
        loop: true,
        targets: `.${css.circle}`,
        translateX: -100,
        translateY: 100,
      })
      .add({
        duration: 1000,
        easing: 'linear',
        loop: true,
        targets: `.${css.circle}`,
        translateX: 0,
        translateY: 0,
      });
  }, []);

  return (
    <Layout date={page.date} title={page.title}>
      <p>This is the first post.</p>
      <div className="d-flex justify-content-center">
          <div className={css.circle} />
      </div>
    </Layout>
  );
}

