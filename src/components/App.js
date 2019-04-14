import React, { Component } from 'react';
import Header from './Header.js';
import Player from './Player.js';

class App extends Component {

  state = {
    players: [
      {
        name: "Steven",
        id: 1
      },
      {
        name: "Ana",
        id:2
      },
      {
        name: "Anthony",
        id: 3
      },
      {
        name: "Anny",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id )
      }
    });
  }

  render(){
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayer={this.state.players.length}
        />

      {/*player list */}
      {this.state.players.map( player =>
        <Player
        name={player.name}
        id={player.id}
        key={player.id.toString()}
        removePlayer={this.handleRemovePlayer}
        />
      )}
      </div>
    );
  }
}

export default App;
