import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  console.log(post)
  return (
    <li>
      <Link to={`/post/${post.id}`} >{post.title}</Link>
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
    <div>
      <button onClick={() => handleTogglingMode('add')}>Add Post</button>
      <ul>
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
