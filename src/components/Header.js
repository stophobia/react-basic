import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function(e) {
              e.preventDefault();
              this.setState({
                mode: 'welcome',
              })
              this.props.onChangePage();
            }.bind(this)}
          >
            <img src={logo} className="App-logo" alt="logo" />
            {this.props.title}
          </a>
        </h1>
        {this.props.subTitle}
      </header>
    )
  }
}

export default Header;
