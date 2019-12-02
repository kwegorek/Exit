import React from 'react';
import { VrButton, asset } from 'react-360';
import styles from '../styles';
import Entity from 'Entity';

export default class StartGameButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VrButton onClick={() => this.props.handleClickPlayGame()}>
        <Entity
          source={{
            obj: asset('3d_mario/mario-sculpture.obj'),
            mtl: asset('3d_mario/mario-sculpture.mtl'),
          }}
          lit={true}
          style={styles.startButton}
        />
      </VrButton>
    );
  }
}
