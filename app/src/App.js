import React, { useEffect } from 'react';
import axios from "axios"

import './App.css';
import UserCard from './components/userCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'spenclark',
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.usersGet();
    this.usersFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.state)
    if(prevState.userName !== this.state.userName) {
      this.usersGet();
      this.usersFollowers();

    }
  }

  usersGet = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  usersFollowers = () => {
    axios
    .get(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => {  console.log(res.data);
      this.setState({ followers: res.data });
    });
  };

  render() {
    return (
      <div className='App'>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App; 