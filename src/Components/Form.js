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
      <form className="box" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="title">Title:</label>
          <div class="control">
            <input className="input" type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput} />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="body">Body:</label>
          <div class="control">
            <input className="input" type="text" id="body" name="body" value={this.state.body} onChange={this.handleInput} />
          </div>
        </div>
        <div className="field is-grouped">
          <p class="control">
            <button className="button is-warning is-small is-outlined" onClick={this.handleCancel}>Cancel</button>
          </p>
          <p class="control">
            <button className="button is-primary is-small is-outlined" onClick={this.handleSubmit}>Submit</button>
          </p>
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
