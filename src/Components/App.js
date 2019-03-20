import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getPosts, makePost } from '../Api/posts';
import Header from './Header/Header';
import HomeContainer from './Home/HomeContainer';
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
      singlePostId: null,
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

            <Route path="/about" component={About} />
          </Switch>

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
