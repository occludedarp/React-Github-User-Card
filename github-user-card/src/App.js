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
      // .then(res => console.log(res.data))
      // console.log(this.state.users)
      .then(res => {
        const loginsArr = res.data

        loginsArr.map(follower => 
          axios.get(`https://api.github.com/users/${follower.login}`)
            .then(res2 => 
              this.setState({
                users: [res2]
              })  
            )
        )        
      });

  }

  render(){
    console.log(this.state.users)
    return(
      <div className="App">
        <UserCard users={this.state.users} />
        <h1> hi there</h1>
      </div>
    );
  }
}

export default App;
