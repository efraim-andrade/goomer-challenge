import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import App from './App';

Modal.setAppElement('#root');
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
