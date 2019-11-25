import React from 'react';
import { AppRegistry, View, asset, VrButton, PointLight } from 'react-360';
import styles from './components/styles';
import Entity from 'Entity';
import store from './store';
import { Provider } from 'react-redux';
import Bookshelf from './components/bookshelf';
import MagicSphere from './components/magicSphere'

function handleClick() {
  console.log('hello');
  return 'hello';
}

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        {/* <AmbientLight intensity={1} /> */}
        <PointLight
          style={{
            color: 'white',
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <Entity
          source={{
            obj: asset('3d_mario/mario-sculpture.obj'),
            mtl: asset('3d_mario/mario-sculpture.mtl'),
          }}
          lit={true}
          style={{
            transform: [
              { translate: [0, 0, -4] },
              { scaleX: 0.02 },
              { scaleY: 0.02 },
              { scaleZ: 0.02 },
            ],
          }}
          onInput={() => handleClick()}
        />
        <Bookshelf/>
        <MagicSphere />
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
