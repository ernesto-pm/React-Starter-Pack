import '../dist/css/style.css';
import React from 'react';
import ReactDom from 'react-dom';

import Routes from './routes';

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <Routes/>, document.getElementById('content')
);



