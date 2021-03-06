import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

//redux and stores
import { Provider } from 'react-redux';
import store from './redux/reducers';
import { fetchCongressMembers } from './redux/actions/fetchActions';

//app styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import reportWebVitals from './reportWebVitals';

store.dispatch(fetchCongressMembers())

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
