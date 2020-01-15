import React from 'react';
import './App.css';
import UserCard from './components/UserCard'
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };  
    console.log('constructor phase first')
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/occludedarp/followers')
      .then(res => {
        this.setState({
          users: res.data
        })  
      });
  }

  render(){
    return(
      <div className="App">
        {this.state.users.map(user => (
          <UserCard
            key={user.id}
            login={user.login}
            image={user.avatar_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
