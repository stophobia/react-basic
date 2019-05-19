import React, { Component } from 'react';

class Nav extends Component {
  shouldComponentUpdate(newProps, newState) {
    if(this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 1;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/contents/"+data[i].id}
            onClick={function(id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
              return;
            }.bind(this, data[i].id)}
          >{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default Nav;
