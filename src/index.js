import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store/configureStore';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
