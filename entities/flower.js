import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Kirby extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('flower.obj'),
          mtl: asset('flower.mtl')}}
        style={{
          transform: [
            { rotateY: 300 },
            { translateX: 50 },
            { translateY: -30 },
            { translateZ: -350 },
            { scaleY: 150 },
            { scaleX: 150 },
          ]
        }}
      />
    );
  }
}
