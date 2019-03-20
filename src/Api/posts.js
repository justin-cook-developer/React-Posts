import axios from 'axios';

export const getPosts = async number => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    const posts = data.slice(0, number);
    return posts;
  } catch(e) {
    console.log(e);
  }
};

export const makePost = async postDetails => {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { userId: 1, ...postDetails },
    );
    const post = await response.data;
    return post;
  } catch(e) {
    console.log(e);
  }
};

export const updatePost = async post => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      title: post.title,
      body: post.body,
    });
    const updatedPost = await response.data;
    return updatedPost;
  } catch(e) {
    console.log(e);
  }
}

export const deletePost = async id => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return 'success';
  } catch(e) {
    console.log(e);
  }
}
