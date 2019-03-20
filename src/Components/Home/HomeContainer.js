import React from 'react';
import PropTypes from 'prop-types';

import PostList from './PostList';
import Form from '../Form';

const HomeContainer = ({ posts, addMode, handleTogglingMode, handleAddPost }) => {
  return (
    <main className="section">
      {
        addMode
        ? <Form handleTogglingMode={() => handleTogglingMode('add')} onSubmit={handleAddPost} />
        : <PostList posts={posts} handleTogglingMode={() => handleTogglingMode('add')} />
      }
    </main>
  );
}

HomeContainer.propTypes = {
  handleTogglingMode: PropTypes.func.isRequired,
  handleAddPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  addMode: PropTypes.bool.isRequired,
};

export default HomeContainer;
