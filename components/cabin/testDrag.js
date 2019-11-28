import React from 'react';
import { View, asset } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';

export default class Mario extends React.Component {
  componentDidMount() {
    console.log('Mario2 Mounted');
  }
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset('3d_mario/mario-sculpture.obj'),
            mtl: asset('3d_mario/mario-sculpture.mtl'),
          }}
          // lit={true}
          style={styles.mario2}
        />
      </View>
    );
  }
}
