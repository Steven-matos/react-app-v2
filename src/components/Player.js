import React, { PureComponent } from 'react';
import PropTypes from "prop-types"
import Counter from './Counter.js';
import Icon from './Icon.js';

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    removePlayer: PropTypes.func,
    score: PropTypes.number,
    index: PropTypes.number,
    changeScore: PropTypes.func,
    isHighScore: PropTypes.bool
  }

  render() {

    const {
      name,
      id,
      removePlayer,
      score,
      index,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
