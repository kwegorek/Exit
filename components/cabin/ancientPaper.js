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

    <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Hey Tani and Aga</Text>
        </View>
      </View>
    )
  }
}

export default AncientPaper
