import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';
import Entity from 'Entity'

export default class Exit extends React.Component {
  render() {
    return (
      <View style={{ transform: [{ translate: [0, 0, -2] }] }}>
        <Entity
          source={{
            obj: { uri: './static_assets/mario.obj' },
            mtl: { uri: './static_assets/mario.mtl'},
          }}
          style={{transform:[
            {scaleX: 0.002 },
            { scaleY: 0.002 },
            { scaleZ: 0.002 },
          ]}}
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
