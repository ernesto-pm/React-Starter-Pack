import '../dist/css/style.css';
import React from 'react';
import ReactDom from 'react-dom';


if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <div>
        <h1 className="text-center">React Starter Pack</h1>
        <p className="text-center">A react starter pack by ErnestoPM</p>
    </div>,
    document.getElementById('content')
);