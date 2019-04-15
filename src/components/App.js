import React, { Component } from 'react';
import Header from './Header.js';
import Player from './Player.js';

class App extends Component {

  state = {
    players: [
      {
        name: "Steven",
        score: 0,
        id: 1
      },
      {
        name: "Ana",
        score: 0,
        id:2
      },
      {
        name: "Anthony",
        score: 0,
        id: 3
      },
      {
        name: "Anny",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) =>{
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
    }));
  }

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
          players={this.state.players}
        />

      {/*player list */}
      {this.state.players.map( (player, index)  =>
        <Player
        name={player.name}
        score={player.score}
        id={player.id}
        key={player.id.toString()}
        index={index}
        changeScore={this.handleScoreChange}
        removePlayer={this.handleRemovePlayer}
        />
      )}
      </div>
    );
  }
}

export default App;
