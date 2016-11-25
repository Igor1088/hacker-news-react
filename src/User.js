import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const id = this.props.params.id;
    console.log(id);
    const url = 'https://hacker-news.firebaseio.com/v0/user/'+id+'.json';
    axios.get(url).then(response => {
      this.setState({user: response.data});
      console.log(response.data);
    })
  }

  render() {
    return (
      <div className="text-center">
        <p>user: {this.state.user.id}</p>
        <p>karma: {this.state.user.karma}</p>
        {
          this.state.user.about ? <p>about: {this.state.user.about}</p> : ''
        }
      </div>
    );
  }
}
