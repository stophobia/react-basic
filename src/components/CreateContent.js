import React, { Component } from 'react';
import '../createcontent.css';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          className="create"
          action="/create_process"
          method="post"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            )
          }.bind(this)}
        >
          <input type="text" name="title" placeholder="title" />
          <br />
          <textarea name="desc" placeholder="description" />
          <br />
          <input type="submit" />
        </form>
      </article>
    )
  }
}

export default CreateContent;
