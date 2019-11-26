import React from 'react';
import { AppRegistry, View, PointLight, Text, asset, Environment } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import Cabin from './components/cabin';
import Location from './components/location'
import styles from './components/styles';
import Entity from 'Entity';

export default class Exit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameStart: false };
    this.handleClick = this.handleClick.bind(this);
    // this.helper =this.helper.bind(this)
  }
  handleClick() {
    //change location in store to selected location 
    this.setState({ gameStart: true }); 
  }

  // handleClick() {
  //   //change location in store 
  //   Environment.setBackgroundImage(asset('360mansion.jpg'))
  //   this.helper()
  // }
  // helper(){
  //   this.setState({ gameStart: true }); 
  // }
  render() {
    //render cabin once player clicks start game 
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
