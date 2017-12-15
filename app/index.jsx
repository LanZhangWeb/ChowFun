import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import RouteMap from './router/routeMap';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouteMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);