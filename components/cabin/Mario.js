import React from 'react';
import { View, asset, VrButton, NativeModules } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';
const { SurfaceModule } = NativeModules;

export default class Mario extends React.Component {
  componentDidMount() {
    console.log('Mario Mounted');
    this.handleClickZoom = this.handleClickZoom.bind(this);
  }
  handleClickZoom() {
    console.log('clicked Mario');
    //change camera position to clicked obj's location
    SurfaceModule.zoomCamera([100, 0, 100]);
  }
  render() {
    return (
      <View>
        <VrButton onClick={() => this.handleClickZoom()}>
          <Entity
            source={{
              obj: asset('3d_mario/mario-sculpture.obj'),
              mtl: asset('3d_mario/mario-sculpture.mtl'),
            }}
            lit={true}
            style={styles.mario}
          />
        </VrButton>
      </View>
    );
  }
}
