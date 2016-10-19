import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //webpack handle this
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
