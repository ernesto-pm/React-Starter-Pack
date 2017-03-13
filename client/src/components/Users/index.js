import React from 'react';

export default class About extends React.Component {

    constructor(props){
        super(props);
        this.state = {users: [],gotUsers:false};
    }

    componentDidMount(){
        console.log("Users page loaded");
        this.getUsers();
    }

    getUsers(){
        fetch('http://54.159.132.224:8016/api/usuarios', {
            headers: new Headers({
                'Content-type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => this.setState({users: data,gotUsers:true}))

    }

    render () {

        let users = this.state.users.map(function(user){
                return(
                    <li key={user.nombre}>
                        {user.nombre}
                    </li>
                );
            })
        ;

        return (
            <div>
                <h1 className="text-center">List of users</h1>
                {this.state.gotUsers ? users : <span>Loading users,please wait</span>}
            </div>
        );
    }
}