import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import RouteMap from './router/routeMap';

ReactDOM.render(
    <RouteMap history={hashHistory} />,
    document.getElementById('root')
);