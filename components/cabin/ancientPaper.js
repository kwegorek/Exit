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
    op: 1, // opacity of hero picture
    width: 1, // width of hero picture
    height: 1, // height of hero picture
    // rotateY: 0, // position
    src: 'scroll/Scroll.png', // file name
  };

  constructor(props) {
    super();
    // this.state = {
    //   rotAnim: new Animated.Value(0),
    // };
  }

  componentDidMount() {
    // this.startAnimation();
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
