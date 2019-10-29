import React from 'react'

import UserCard from './userCard'

const UserList = props => {

    
    return (
        <div>
            {props.user.map(item =>
                <UserCard 
                key={item.login}
                item={item}
                />
            )}

        </div>

    )
}

export default UserList