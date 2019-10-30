import React from 'react'

import userCard from './userCard'

const UserList = props => {

    
    return (
        <div>
              {props.followers.map((follower, id) => (
                <div key={id}>
                    <div>
                    <h3>User Login: {follower.login}</h3>
                    </div>
                </div>
              ))}
        </div>

    )
}

export default UserList