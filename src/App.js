import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monster: [
      { 
        name: 'Frankenstein',
        id: 'dsflkj2'
      },
      { 
        name: 'Dracula',
        id: 'alskd4'
      },
      { 
        name: 'Zombie',
        id: 'akfbk4'
      }
      
    ]}
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    ); 
  }
}

export default App;
