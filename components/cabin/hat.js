import React from 'react';
import { View, asset, VrButton, NativeModules, PointLight } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';
const { SurfaceModule } = NativeModules;

export default class Hat extends React.Component {
  componentDidMount() {
    console.log('hat Mounted)');
    this.handleClickZoom = this.handleClickZoom.bind(this);
  }
  handleClickZoom() {
    console.log('clicked hat');
    //change camera position to clicked obj's location
    SurfaceModule.zoomCamera([100, 0, 100]);
  }
  render() {
    return (
      <View>
        {/* <PointLight
          style={{
            color: 'purple',
            transform: [{ translate: [-100, 0, -100] }],
          }}
        /> */}
        <VrButton onClick={() => this.handleClickZoom()}>
          <Entity
            source={{
              obj: asset('3d_hat/witch_hat(POSER).obj'),
              mtl: asset('3d_hat/witch_hat.mtl'),
            }}
            lit={true}
            style={styles.hat}
          />
        </VrButton>
      </View>
    );
  }
}
