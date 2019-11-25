import React from 'react';
import { AppRegistry, View, PointLight, Text, asset } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import Location from './components/location';
import styles from './components/styles';
import Mario from './components/cabin/Mario';
import Entity from 'Entity';

export default class Exit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameStart: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('CKUCJSD');
    this.setState({gameStart: true})
  }
  render() {
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
//register intro and exit pages
