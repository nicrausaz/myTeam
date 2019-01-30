import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8000/api';
Axios.defaults.withCredentials = true;


const store = configureStore();

const unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

unsubscribe();
