import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'basir',
                avatar_url: 'https://avatars1.githubusercontent.com/u/2572995?s=460&u=606392d71d7f987f3bed0e7170198f9351aee115&v=4',
                html_url: 'https://github.com/octocat'
            },
            {
                id: '2',
                login: 'Mark',
                avatar_url: 'https://avatars1.githubusercontent.com/u/2572995?s=460&u=606392d71d7f987f3bed0e7170198f9351aee115&v=4',
                html_url: 'https://github.com/octocat'
            },
            {
                id: '3',
                login: 'Jeremy',
                avatar_url: 'https://avatars1.githubusercontent.com/u/2572995?s=460&u=606392d71d7f987f3bed0e7170198f9351aee115&v=4',
                html_url: 'https://github.com/octocat'
            }
        ]
    }

    render() {
        const { users } = this.state;
        return (
            <div className="user-style">
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        )
    }
};

export default Users;
