import React from 'react';
import {  asset } from 'react-360';
import Entity from 'Entity';


class MagicSphere extends React.Component {
    render() {
        return (
            <Entity
            source={{
              obj: asset('3d_globe/magic_sphere.obj'),
              //mtl: asset('3d_globe/magic_sphere.mtl'),
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-1, -5, -5] },
                { scaleX: 0.02 },
                { scaleY: 0.02 },
                { scaleZ: 0.02 },
              ],
              color: 'red',
              opacity: 0.5
              
            }}
          />
        )
    }
}

export default MagicSphere