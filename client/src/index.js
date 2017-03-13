import '../dist/css/style.css';
import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import Routes from './routes';

try{
    injectTapEventPlugin();
}catch(err){
    //console.log(err);
}

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <MuiThemeProvider>
        <Routes/>
    </MuiThemeProvider>
    , document.getElementById('content')
);



