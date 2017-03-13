import React from 'react';
import {Router,Route,browserHistory, IndexRoute} from 'react-router';
import {Navbar,About,Welcome,Contact,UsersIndex} from './components';


const routes = (

    <Route path="/" component={Navbar}>

        <IndexRoute component={Welcome}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>

        <Route path="users">
            <IndexRoute component={UsersIndex}/>
        </Route>

    </Route>
);



export default class Routes extends React.Component{

    shouldComponentUpdate(){
        return false;
    }

    render(){
        return(
            <Router history={browserHistory} routes={routes}>
            </Router>
        )
    }
}


//export default Routes;