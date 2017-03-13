import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component{
    // This handles active links
    active(path){
        if(this.props.location.pathname === path){
            return 'active';
        }
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className={this.active('/')}>
                                    <Link to="/">Home</Link>
                                </li>

                                <li className={this.active('/about')}>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}