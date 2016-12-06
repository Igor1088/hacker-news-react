import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class NewsItem extends Component {

  render() {
    return (
      <li key={this.props.id} className="list-group-item text-left">
        <div className="media">
            <div className="media-left">
              <p>{this.props.id + 1}.</p>
            </div>
            <div className="media-body">
              <a href={this.props.data.url} className="media-heading" target="_blank">{this.props.data.title}</a>
              <p>{this.props.data.score} points by <Link to={'/user/' + this.props.data.by}>{this.props.data.by}</Link> <span>posted {moment(this.props.data.time*1000).fromNow()}</span></p>
            </div>
        </div>
      </li>
    );
  }
}

export default NewsItem;
