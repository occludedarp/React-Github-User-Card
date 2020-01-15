import React from 'react';
import './App.css';
import axios from 'axios';
import FollowerCard from './components/FollowerCard'
import User from './components/User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };  
    console.log('constructor phase first')
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/occludedarp')
    .then(res => {
      this.setState({
        user: res.data
      })  
    });

    axios.get('https://api.github.com/users/occludedarp/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })  
      });
  }

  render(){
    return(
      <div className="App">

        <User 
          key={this.state.user.id}
          login={this.state.user.login}
          image={this.state.user.avatar_url}
        />

        {this.state.followers.map(follower => (
          <FollowerCard
            key={follower.id}
            login={follower.login}
            image={follower.avatar_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
