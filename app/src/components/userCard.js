import React from 'react'

const UserCard = props => {

    return (
        <div>
            <h3>{this.props.login}</h3>
            <p>{this.props.html_url}</p>
        </div>
    )
}

export default UserCard