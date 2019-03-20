import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

import { getPosts } from '../Api/posts';
import Header from './Header/Header';
import About from './About';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      filterText: '',
      addMode: false,
      editMode: false,
      singlePostId: null,
    };
  }

  async componentDidMount() {
    try {
      const posts = await getPosts(20);
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

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header handleInput={this.handleSearchInput} value={this.state.filterText} />

          <Switch>
            <Route path="/" exact render={() => {
             return <div>Hello</div>
            }} />

            <Route path="/about" component={About} />
          </Switch>
          
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
