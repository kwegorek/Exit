import React from 'react';
import { View, asset, VrButton, NativeModules, PointLight } from 'react-360';
import styles from '../styles/';
import Entity from 'Entity';
import { disableAllExcept } from '../../store/buttons';
import { connect } from 'react-redux';

const { SurfaceModule } = NativeModules;

 class Skeleton extends React.Component {
  componentDidMount() {
    console.log('skeleton Mounted');
    this.handleClickZoom = this.handleClickZoom.bind(this);
  }
  handleClickZoom() {
    this.props.disableButtons('allCompleted','skeletonButton');
    console.log('clicked skeleton');
    //change camera position to clicked obj's location
    SurfaceModule.zoomCamera([100, 0, -70]);
  }

  render() {
    const disableStatus = !this.props.buttons.skeletonButton
    return (
      <View>
        <VrButton onClick={() => this.handleClickZoom()} disabled={disableStatus}>
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
const mapStateToProps = state => {
  return {
    buttons: state.buttons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skeleton);
