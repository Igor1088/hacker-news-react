import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStories: [],
      topStories: [],
      showStories: [],
      jobs: []
    }

    this.getIds = this.getIds.bind(this);
    this.getData = this.getData.bind(this);
  }

  getIds(query, statePiece) {
    const url = 'https://hacker-news.firebaseio.com/v0/'+query+'.json';
    //const start = statePiece === 'topStories' ?  this.state.topStories.length : this.state.newStories.length;
    let start=0;
    if( statePiece === 'topStories') {
      start = this.state.topStories.length;
    } else if( statePiece === 'newStories') {
      start = this.state.newStories.length;
    } else if( statePiece === 'jobs') {
      start = this.state.jobs.length;
    } else if( statePiece === 'showStories') {
      start = this.state.showStories.length;
    }
    const maxStories = start + 9;
    axios.get(url).then(response => {
      const data = response.data;
      for (var i = start; i < maxStories; i++) {
        this.getData(data[i], statePiece);
      }
    });
  }

  getData(id, statePiece) {
    const url = 'https://hacker-news.firebaseio.com/v0/item/'+id+'.json';
    axios.get(url).then(response => {
      const data = response.data;

      if(statePiece === 'newStories') {
        this.setState({ newStories: this.state.newStories.concat(data)});
      }

      if(statePiece === 'topStories') {
        this.setState({ topStories: this.state.topStories.concat(data)});
      }

      if(statePiece === 'showStories') {
        this.setState({ showStories: this.state.showStories.concat(data)});
      }

      if(statePiece === 'jobs') {
        this.setState({ jobs: this.state.jobs.concat(data)});
      }
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Hacker News</h1>
        </header>
        <Navigation />

        {this.props.children && React.cloneElement(this.props.children, {
              newStories: this.state.newStories,
              topStories: this.state.topStories,
              showStories: this.state.showStories,
              jobs: this.state.jobs,
              getIds: this.getIds
        })}
      </div>
    );
  }
}

export default App;
