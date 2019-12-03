import React from 'react';
import { View, Environment, asset, NativeModules, VrButton } from 'react-360';
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';
import StartGameButton from './startGameButton';
const { SurfaceModule } = NativeModules;

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPlayGame = this.handleClickPlayGame.bind(this);
  }
  componentDidMount() {
    //render tutorial surfaces
    SurfaceModule.changeSurfaceSize('TutorialSurface', 1000, 1000);
    SurfaceModule.changeSurfaceSize('TutorialSurface2', 1000, 1000);
    console.log('tutorial component mounted');
  }
  handleClickPlayGame() {
    //unmount surfaces if not already unmounted
    SurfaceModule.changeSurfaceSize('TutorialSurface', 1, 1);
    SurfaceModule.changeSurfaceSize('TutorialSurface2', 1, 1);
    //change to chosen game room
    this.props.changeLocation('cabin');
  }
  render() {
    return (
      <View>
        <StartGameButton handleClickPlayGame={this.handleClickPlayGame} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Tutorial);
