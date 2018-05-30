// import React from 'react'
// import { render } from 'react-dom'

//
// render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
