import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import withDataStore from './withDataStore';

const AppWithDataStore = withDataStore(App);

ReactDOM.render(
  <AppWithDataStore />,
  document.getElementById('root')
);
