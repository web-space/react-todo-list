import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));
registerServiceWorker();
