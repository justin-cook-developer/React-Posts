import axios from 'axios';

export const getPosts = async number => {
  try {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data =  await response.data;
    const posts = data.slice(0, number);
    return posts;
  } catch(e) {
    console.log(e);
  }
};
