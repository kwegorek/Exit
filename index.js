import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight,
} from 'react-360';
import Entity from 'Entity';

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
