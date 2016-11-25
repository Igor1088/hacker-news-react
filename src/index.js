import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import News from './NewStories';
import TopStories from './TopStories';
import Jobs from './Jobs';
import User from './User';
import ShowStories from './ShowStories';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopStories} />
      <Route path="new" component={News} />
      <Route path="show" component={ShowStories} />
      <Route path="jobs" component={Jobs} />
      <Route path="user/:id" component={User} />
    </Route>
  </Router>,
  document.getElementById('root')
);
