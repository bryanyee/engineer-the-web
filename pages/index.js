import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

export default function App() {
  return (
    <Layout hideHeader>
      <h1>Engineer The Web</h1>
      <p>
        <span>A web software engineering blog by </span>
        <a href="https://github.com/bryanyee" target="_blank" rel="noopener noreferrer">Bryan Yee</a>
        .
      </p>
      <ul>
        <PostLink id="first-post" />
      </ul>
    </Layout>
  );
}
