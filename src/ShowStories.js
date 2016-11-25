import React, { Component } from 'react';
import NewsItem from './NewsItem';

class ShowStories extends Component {
  constructor(props) {
    super(props);

    this.getNewsIds = this.getNewsIds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getNewsIds();
  }

  getNewsIds() {
    const query = 'showstories';
    const statePiece = 'showStories';
    this.props.getIds(query, statePiece);
  }

  handleClick() {
    this.getNewsIds();
  }

  render() {
    let items;
    if( this.props.showStories.length !== 0 ) {
      items = this.props.showStories.map((i, key) => {
        return (<NewsItem key={key} id={key} data={i} />);
      })
    }
    return (
      <div>
        <ul className="list-group">
          {items ? items : <p>Loading...</p> }
        </ul>
        <button onClick={this.handleClick} className="btn btn-default">More</button>
      </div>
    );
  }
}

export default ShowStories;
