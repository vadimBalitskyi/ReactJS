import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reset from './styles/reset.css'
import css from './styles/style.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
