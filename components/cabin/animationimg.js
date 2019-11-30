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


export default class Hero extends React.Component {
  static defaultProps = {
    op: 1, // opacity of hero picture
    width: 1, // width of hero picture
    height: 1, // height of hero picture
    rotateY: 0, // position
    src: 'scroll/Scroll.png', // file name
  };

  constructor(props) {
    super();
    this.state = {
      rotAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(
      this.state.rotAnim,
      {
        toValue: 360,
        duration: 3000,
      }
    )
    .start(() => {
      // Restart at end
      this.state.rotAnim.setValue(0);
      this.startAnimation();
    });
  }

  render() {
    return (
      <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: this.props.width,
          height: this.props.height,
          transform: [
            {rotateY: this.props.rotateY},
            {translateZ: -3},
            {rotateY: this.state.rotAnim},
            {translateX: 0.5}
          ],
          opacity: this.props.op,
        }}
        source={ asset(this.props.src) }
      />
    );
  }
}