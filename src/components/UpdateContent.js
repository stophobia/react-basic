import React, { Component } from 'react';
import '../createcontent.css';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      description: this.props.data.description,
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          className="create"
          action="/update_process"
          method="post"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.description,
            )
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id} />
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.inputFormHandler}
          />
          <br />
          <textarea
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.inputFormHandler}
          />
          <br />
          <input type="submit" />
        </form>
      </article>
    )
  }
}

export default UpdateContent;
