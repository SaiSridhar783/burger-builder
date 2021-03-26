import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState())
            return result;
        }
    };
}; */

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
