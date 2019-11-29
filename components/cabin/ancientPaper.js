import React from 'react';
import {
  Easing
} from 'react-native';
import {
  asset,
  Animated,
  View,
  VrButton,
  Image,Text,
  PointLight
} from 'react-360';

import styles from '../styles'
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);




class AncientPaper extends React.Component {
  state = {

  };

  componentDidMount() {
      console.log('papyrus renderes')

  }


  render() {


    return ( 

    <View>

    <AnimatedEntity
     
    source={{

    obj: asset(this.state.textureObj),
    mtl: asset('3d_globe/magic_sphere.mtl'),
    }}
    lit={true}
    style={{
    transform: [
        { translate: [-2, -2, -3] },
        { translateY: yPosition },
        { scaleX: 0.01 },
        { scaleY: 0.01},
        { scaleZ: 0.01 },
    ],

    
    }}
        />
</View>
    )
  }
}

export default AncientPaper
