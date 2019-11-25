import React from 'react';
import { View, asset } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';

export default class Mario extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('Mario Mounted');
  }
  handleClick() {
    console.log('hello');
    return 'hello';
  }
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset('3d_mario/mario-sculpture.obj'),
            mtl: asset('3d_mario/mario-sculpture.mtl'),
          }}
          lit={true}
          style={styles.mario}
          onInput={() => handleClick()}
        />
      </View>
    );
  }
}
