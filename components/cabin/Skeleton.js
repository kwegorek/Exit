import React from 'react';
import { View, asset, VrButton, NativeModules, PointLight } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';
const { SurfaceModule } = NativeModules;

export default class Skeleton extends React.Component {
  componentDidMount() {
    console.log('skeleton Mounted');
    this.handleClickZoom = this.handleClickZoom.bind(this);
  }
  handleClickZoom() {
    console.log('clicked skeleton');
    //change camera position to clicked obj's location
    SurfaceModule.zoomCamera([100, 0, -70]);
  }
  render() {
    return (
      <View>
        <VrButton onClick={() => this.handleClickZoom()}>
          <Entity
            source={{
              obj: asset('3d_skeleton/head-skeleton.obj'),
              mtl: asset('3d_skeleton/head-skeleton.mtl'),
            }}
            lit={true}
            style={styles.skeleton}
          />
        </VrButton>
      </View>
    );
  }
}
