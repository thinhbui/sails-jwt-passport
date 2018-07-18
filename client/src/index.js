import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
// import App from './App';
import reducer from './reducers';
import SidebarExample from './routes/index';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <SidebarExample />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
