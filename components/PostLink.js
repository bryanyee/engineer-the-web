import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const PostLink = ({ className, date, id, title }) => (
  <div className={className}>
    <Link href={`/p/${id}`}>
      <a><h3 className="mb-1">{title}</h3></a>
    </Link>
    <small>{date}</small>
  </div>
);

PostLink.defaultProps = {
  className: '',
};

PostLink.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostLink
