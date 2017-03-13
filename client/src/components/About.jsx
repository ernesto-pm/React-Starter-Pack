import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


export default class About extends React.Component {
    render () {
        return (
            <div>
                <h1 className="text-center">About Me</h1>
                <p className="text-center">
                    A react starter pack by ErnestoPM
                </p>
                <div className="text-center">
                    <RaisedButton label="Contact me!" secondary={true} href='https://www.github.com/ernesto-pm'/>
                </div>
                <hr/>
                <div className="text-center">
                    <p className="text-center">
                        Please fill out the form below with your information
                    </p>
                </div>
                <div className="text-center">
                    <TextField
                        floatingLabelText="First Name"
                    />
                    <TextField
                        floatingLabelText="Last Name"
                    />
                </div>
                <div className="text-center">
                    <TextField
                        floatingLabelText="Phone Number"
                    />
                    <TextField
                        floatingLabelText="Email"
                    />
                </div>
                <br/>
                <div className="text-center">
                    <RaisedButton label="Register Me!" primary={true}/>
                </div>
            </div>
        );
    }
}