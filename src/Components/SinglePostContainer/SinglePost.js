import React from 'react';

const SinglePost = ({ post, handleTogglingMode, handleDeletePost, history }) => {
  const leftButtonStyles = {
    marginRight: 7,
  };

  return (
    <div className="box">
      <div className="content">
        <button style={leftButtonStyles} className="button is-primary" onClick={handleTogglingMode}>Update Post</button>
        <button className="button is-danger" onClick={() => handleDeletePost(post.id, history)}>Delete Post</button>
      </div>
      <div className="content">
        <h2>{ post && post.title }</h2>
        <p>{ post && post.body }</p>
      </div>
    </div>
  );
}

export default SinglePost;
