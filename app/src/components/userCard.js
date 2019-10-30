import React from 'react'
import UserList from './userList'

const UserCard = props => {

    return (
        <div>
           <div>
            
                <h2>User Login: {props.user.login}</h2>
                <p>User Location: {props.user.location}</p>
                <p>User Following: {props.user.following}</p>
                <p>User Followers: {props.user.followers}</p>

            <UserList user={props.user} followers={props.followers} />
      </div>
        </div>
    )
}

export default UserCard