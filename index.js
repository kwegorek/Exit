import React from 'react';
import { AppRegistry, StyleSheet,
  PointLight, View,asset} from 'react-360';
import Entity from 'Entity'

export default class Exit extends React.Component {
  render() {
    return (
      <View >
        <PointLight
          style={{
            color: 'white',
            transform: [
              {translate: [0, 0, 0]}
            ]
          }}
        />
        <Entity
          source={{
            obj: asset('mario.obj'),
            mtl: asset('mario.mtl'),
          }}
          lit= {true}
          style={{
            color: "#FFF",
            transform: [
              {translate: [-11, -10, -5]},// to put it further
              { scaleX: 0.02 },
              { scaleY: 0.02 },
              { scaleZ: 0.02 },
            ]
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Exit', () => Exit);
