import React from 'react';
import ReactDom from 'react-dom';


if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <h1>Hello guys</h1>,
    document.getElementById('content')
);