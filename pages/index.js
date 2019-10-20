import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="first-post" />
      </ul>
    </Layout>
  );
}
