import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <li>
      <Link to={`/post/${post.id}`} className="list-item">{post.title}</Link>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

const PostList = ({ posts, handleTogglingMode }) => {
  const postElements = posts.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="box">
      <div className="content">
        <button className="button is-normal is-primary" onClick={handleTogglingMode}>Add Post</button>
      </div>
      <ul className="list is-hoverable">
        {postElements}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  handleTogglingMode: PropTypes.func.isRequired,
};

export default PostList;
