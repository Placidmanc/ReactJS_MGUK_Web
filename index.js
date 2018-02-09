import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/core.min.css';
import './assets/css/thesaas.css';
import './assets/css/style.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
