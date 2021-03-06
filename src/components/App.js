import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';

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

  // player id Counter

    prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
     };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id )
      }
    });
  }

  getHighScore = () => {
  const scores = this.state.players.map( p => p.score );
  const highScore = Math.max(...scores);
  if (highScore) {
    return highScore;
    }
    return null;
  }

  render(){

    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header
            title="Scoreboard"
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
              isHighScore={highScore === player.score}
            />
          )}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
