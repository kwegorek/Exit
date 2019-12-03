import React from 'react';
import { View, asset, VrButton, NativeModules, PointLight } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';
const { SurfaceModule } = NativeModules;

export default class Hat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <VrButton onClick={() => this.props.handleClickEscapeKey()}>
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
