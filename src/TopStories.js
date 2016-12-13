import React, { Component } from 'react';
import NewsItem from './NewsItem';

class TopStories extends Component {
  constructor(props) {
    super(props);

    this.getNewsIds = this.getNewsIds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getNewsIds();
  }

  getNewsIds() {
    const query = 'topstories';
    const statePiece = 'topStories';
    this.props.getIds(query, statePiece);
  }

  handleClick() {
    this.getNewsIds();
  }

  render() {
    let items;
    if(this.props.topStories.length !== 0) {
      items = this.props.topStories.map((i, key) => {
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

export default TopStories;
