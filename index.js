import React from 'react';
import { AppRegistry, View, PointLight } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import Cabin from './components/cabin';
import NavBar from './components/navBar';

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <Cabin />
      </View>
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