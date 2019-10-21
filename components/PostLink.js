import Link from 'next/link';
import PropTypes from 'prop-types';

const PostLink = ({ date, id, title }) => (
  <div>
    <Link href={`/p/${id}`}>
      <a><h3 className="mb-1">{title}</h3></a>
    </Link>
    <small>{date}</small>
  </div>
);

PostLink.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostLink
