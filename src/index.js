import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './index.css';

ReactDOM.render(<App initialData={[]} />, document.getElementById('root'));
registerServiceWorker();
