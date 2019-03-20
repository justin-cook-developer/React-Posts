import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleCancel = e => {
    e.preventDefault();
    this.props.handleTogglingMode('add');
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input type="text" id="body" name="body" value={this.state.body} onChange={this.handleInput} />
        </div>
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  initialState: {
    title: '',
    body: '',
  },
};

Form.propTypes = {
  handleTogglingMode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
