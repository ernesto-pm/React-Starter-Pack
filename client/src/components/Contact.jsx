import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Contact extends React.Component {
    render () {
        return (
            <div>
                <h1 className="text-center">Contact me</h1>
                <p className="text-center">
                    <a href="http://www.github.com/ernesto-pm" target="blank">Github</a>
                </p>
            </div>
        );
    }
}