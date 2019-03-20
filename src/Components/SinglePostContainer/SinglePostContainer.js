import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';
import SinglePost from './SinglePost';

const SinglePostContainer = ({ post, editMode, handleTogglingMode, handleDeletePost, history, handleUpdatePost }) => {
  return (
    <main className="section">
    {
      editMode
      ? <Form initialState={post} handleTogglingMode={() => handleTogglingMode('edit')} onSubmit={handleUpdatePost} />
      : <SinglePost post={post} handleTogglingMode={() => handleTogglingMode('edit')} handleDeletePost={handleDeletePost} history={history}  />
    }
    </main>
  );
}

SinglePostContainer.propTypes = {
  handleTogglingMode: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleUpdatePost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default SinglePostContainer;
