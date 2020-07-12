import React, { Component } from 'react'

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: '1',
            login: 'basir',
            avatar_url: 'https://avatars1.githubusercontent.com/u/2572995?s=460&u=606392d71d7f987f3bed0e7170198f9351aee115&v=4',
            html_url: 'https://github.com/octocat'
        }
    }

    render() {

        const {id, login, avatar_url, html_url} = this.state;

        return (
            <div className="card text-center">
                <img className="round-img" src={avatar_url} alt=""/>
            </div>
        )
    }
}

export default UserItem
