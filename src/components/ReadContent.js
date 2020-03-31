import React, { Component } from 'react'

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default ReadContent
