import React, { Component } from 'react';

class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'React',
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);

    this.handleCommentsChange = this.handleCommentsChange.bind(this);

    this.handleTopicChange = this.handleTopicChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleCommentsChange(event) {
    this.setState({
      comments: event.target.value,
    });
  }

  handleTopicChange(event) {
    this.setState({
      topic: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleUserNameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>

          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value='React'>React</option>
              <option value='Angular'>Angular</option>
              <option value='vue'>Vue</option>
            </select>
          </div>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormHandling;
