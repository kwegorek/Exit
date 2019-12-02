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
  PointLight,  AnimatedImage,
} from 'react-360';

import styles from '../styles'
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class AncientPaper extends React.Component {
  static defaultProps = {
    op: 1,
    width: 1,
    height: 1, 
    // rotateY: 0, // position
    src: '2d_intro/intro_page.jpg', // file name
  };

  constructor(props) {
    super();

  }

  componentDidMount() {

  }



  render() {
    return (
      <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: 1,
          height: 1,
          transform: [

            {translateZ: -3},

            {translateX: 0.5}
          ],
          opacity: 1,
        }}
        source={ asset(this.props.src) }
      />
    );
  }
}

export default AncientPaper
