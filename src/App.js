import React, { Component } from 'react';
import Header from './components/Header';
import Control from './components/Control';
import Nav from './components/Nav';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 0,
      welcome: {
        title: 'Welcome to React World',
        subTitle: 'This is test project.',
      },
      content: [
        {
          id:0,
          title: 'Hello React',
          description: 'Learn and code the next web.',
        },
        {
          id:1,
          title: 'React',
          description: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
        },
        {
          id:2,
          title: 'Immutability',
          description: 'Immutability is a hot subject in modern JavaScript. The reason why this topic is so popular now is of course the functional programming paradigm.',
        },
        {
          id:3,
          title: 'OOP',
          description: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods).',
        },
      ],
    }
  }
  getReadContent() {
    var i = 0;
    while(i < this.state.content.length) {
      var data = this.state.content[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _description, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.content[0].title;
      _description = this.state.content[0].description;
      _article = <ReadContent title={_title} description={_description}></ReadContent>
    }else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} description={_content.description}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_id, _title, _description) {
        this.max_content_id = this.max_content_id + 1;
        // 1. concat
        // var _content = this.state.content.concat(
        //   {
        //     id: this.max_content_id,
        //     title: _title,
        //     description: _desc,
        //   }
        // );
        // this.setState(
        //   {
        //     content: _content
        //   }
        // )
        // 2. Array.from
        var newContent = Array.from(this.state.content);
        newContent.push(
          {
            id: this.max_content_id,
            title: _title,
            description: _description,
          }
        );
        this.setState(
          {
            content: newContent
          }
        )
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _description) {
        var _content = Array.from(this.state.content);
        var i = 0;
        while(i < _content.length) {
          if(_content[i].id === _id) {
            _content[i] = {id: _id, title: _title, description: _description};
            break;
          }
          i = i + 1;
        }
        this.setState(
          {
            content: _content
          }
        )
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header
            title={this.state.welcome.title}
            subTitle={this.state.welcome.subTitle}
            onChangePage={function() {
              this.setState({
                mode:'welcome',
              });
            }.bind(this)}
          ></Header>
          <Control
            onChangeMode={function(_mode) {
              if(_mode === 'delete') {
                if(window.confirm('really?')) {
                  var _content = Array.from(this.state.content);
                  var i = 0;
                  while(i < _content.length) {
                    if(_content[i].id === this.state.selected_content_id) {
                      _content.splice(i, 1);
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({
                    mode: 'welcome',
                    content: _content,
                  })
                }
              }else{
                this.setState({
                  mode: _mode,
                })
              }
            }.bind(this)}
          ></Control>
          <Nav
            onChangePage={function(id) {
              this.setState({
                mode: 'read',
                selected_content_id: Number(id),
              });
            }.bind(this)}
            data={this.state.content}
          ></Nav>
          {this.getContent()}
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App;
