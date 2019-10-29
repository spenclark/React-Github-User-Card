import React, { useEffect } from 'react';
import axios from "axios"

import './App.css';
import UserList from './components/userList'

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/spenclark')
    .then(res => {
      this.setState({user: res.data})
    }
     )
    .catch(res => console.log(res.data))
  }


  render() {
    return (
      <>
      <UserList user={this.state.user}/>
      </>
    )
    }
}

export default App
