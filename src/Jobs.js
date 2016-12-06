import React, { Component } from 'react';
import moment from 'moment';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.getJobsIds = this.getJobsIds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getJobsIds();
  }

  getJobsIds() {
    const query = 'jobstories';
    const statePiece = 'jobs';
    this.props.getIds(query, statePiece);
  }

  handleClick() {
    this.getJobsIds();
  }

  render() {
    let items;
    if(this.props.jobs.length !== 0) {
      items = this.props.jobs.map((i, key) => {
        return (
          <li key={key} className="list-group-item text-left">
            <div className="media">
                <div className="media-body">
                  <a href={i.url} className="media-heading" target="_blank">{i.title}</a>
                  <p>posted {moment(i.time*1000).fromNow()}</p>
                </div>
            </div>
          </li>);
      });
    }

    return (
      <div>
        <ul className="list-group">
          {items ? items : <p>Loading...</p>}
        </ul>
        <button className="btn btn-default" onClick={this.handleClick}>More</button>
      </div>
    );
  }
}

export default Jobs;
