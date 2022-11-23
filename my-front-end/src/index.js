import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import loadGreeting from './redux/actions';
import store from './redux/configureStore';
import { Provider } from 'react-redux'

//store.dispatch(loadGreeting());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  //document.getElementById('root'),
);