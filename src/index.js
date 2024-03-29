import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { HashRouter } from 'react-router-dom';
import Main from './components/main';

ReactDOM.render(<App/>, document.getElementById('root'));

// serviceWorker.unregister();
