import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getPosts, makePost, deletePost, updatePost } from '../Api/posts';
import Header from './Header/Header';
import HomeContainer from './Home/HomeContainer';
import SinglePostContainer from './SinglePostContainer/SinglePostContainer';
import About from './About';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      currentId: 0,
      filterText: '',
      addMode: false,
      editMode: false,
    };
  }

  async componentDidMount() {
    try {
      const posts = await getPosts();
      this.setState({ posts });
    } catch(e) {
      console.log(e);
    }
  }

  handleSearchInput = e => {
    const { value } = e.target;
    this.setState({
      filterText: value,
    });
  }

  handleTogglingMode = mode => {
    this.setState(state => ({
      [`${mode}Mode`]: !state[`${mode}Mode`],
    }));
  }

  handleAddPost = async postDetails => {
    try {
      const post = await makePost(postDetails);
      this.setState(state => ({
        posts: [...state.posts, { ...post, id: post.id + state.currentId }],
        addMode: false,
        currentId: state.currentId + 1,
      }));
    } catch(e) {
      console.log(e);
    }
  }

  handleDeletePost = async (id, history) => {
    try {
      await deletePost(id);
      history.push('/');
      this.setState(state => ({
        posts: state.posts.filter(post => post.id !== id),
      }));
    } catch(e) {
      console.log(e);
    }
  }

  handleUpdatePost = async post => {
    try {
      const updatedPost = await updatePost(post);
      this.setState(state => {
        const updatedPosts = state.posts.map(post => {
          if (post.id === updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        });

        return {
          posts: updatedPosts,
          editMode: false,
        };
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header handleInput={this.handleSearchInput} value={this.state.filterText} />

          <Switch>
            <Route path="/" exact render={() => {
              const posts = this.state.posts.filter(post => post.title.includes(this.state.filterText));
              return <HomeContainer
                handleTogglingMode={this.handleTogglingMode}
                handleAddPost={this.handleAddPost}
                posts={posts}
                addMode={this.state.addMode}
              />
            }} />

            <Route path="/post/:id" exact render={({ match, history }) => {
              const post = this.state.posts.find(post => post.id.toString() === match.params.id);
              return <SinglePostContainer
                handleTogglingMode={this.handleTogglingMode}
                handleDeletePost={this.handleDeletePost}
                handleUpdatePost={this.handleUpdatePost}
                history={history}
                post={post}
                editMode={this.state.editMode}
              />
            }} />

            <Route path="/about" component={About} />
          </Switch>

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
