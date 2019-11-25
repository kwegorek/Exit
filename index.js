import React from 'react';
import { AppRegistry, View, PointLight, Text, StyleSheet, } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import Mario from './components/Mario';
import Bookshelf from './components/bookshelf';
import MagicSphere from './components/magicSphere';

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <Mario />
        <Bookshelf />
        <MagicSphere />
      </View>
    );
  }
}


// eslint-disable-next-line react/no-multi-comp
export class Intro extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
         <Text >
          {'Hello -----------------Useer'}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'green',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});



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
AppRegistry.registerComponent('Mario', () => Mario);
AppRegistry.registerComponent('Intro', () => Intro);
