import React from 'react';
import { View, Environment, asset } from 'react-360';
import Entity from 'Entity';
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';
import { NativeModules } from 'react-360';
const { SurfaceModule } = NativeModules;

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('tutorial component mounted');
  }
  handleClick() {
    //unmount tutorial surrfaces
    SurfaceModule.changeSurfaceSize('TutorialOne', 1, 1);
    SurfaceModule.changeSurfaceSize('TutorialTwo', 1, 1);
    //change to chosen game room
    this.props.changeLocation('cabin');
  }
  render() {
    return (
      <Entity
        source={{
          obj: asset('3d_mario/mario-sculpture.obj'),
          mtl: asset('3d_mario/mario-sculpture.mtl'),
        }}
        lit={true}
        style={styles.mario}
        onInput={() => this.handleClick()}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Tutorial);
