import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor(props) {
    super(props);

    this.getNewsIds = this.getNewsIds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getNewsIds();
  }

  getNewsIds() {
    const query = 'newstories';
    const statePiece = 'newStories';
    this.props.getIds(query, statePiece);
  }

  handleClick() {
    this.getNewsIds();
  }

  render() {
    let items;
    if(this.props.newStories.length !== 0) {
      items = this.props.newStories.map((i, key) => {
        return (<NewsItem key={key} id={key} data={i}/>);
      });
    }

    return (
      <div>
        <ul className="list-group">
          {items ? items : <div className="loader"></div>}
        </ul>
        <button className="btn btn-default" onClick={this.handleClick}>More</button>
      </div>
    );
  }
}

export default News;
