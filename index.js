import React from 'react';
import { AppRegistry, View, PointLight, Text, asset } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import Location from './components/location';
import styles from './components/styles';
import Entity from 'Entity';

export default class Exit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameStart: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ gameStart: true });
  }
  render() {
    //render player's chosen location (Ex: cabin)
    if (this.state.gameStart) {
      return (
        <View>
          <PointLight
            style={{
              transform: [{ translate: [0, 0, 0] }],
            }}
          />
          <Location />
        </View>
      );
    }
    //render intro & tutorial page --> gives option to click cabin etc
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

class ConnectedExit extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Exit />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Exit', () => ConnectedExit);
AppRegistry.registerComponent('NavBar', () => NavBar);
