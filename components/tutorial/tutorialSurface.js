import React from 'react';
import { Text, View, VrButton } from 'react-360';
import styles from '../styles';
import { NativeModules } from 'react-360';
const { SurfaceModule } = NativeModules;

export default class TutorialSurface extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //unmount tutorial surrface
    console.log('unmounting surface');
    SurfaceModule.changeSurfaceSize('TutorialSurface', 1, 1);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Exit - Escape The Room! Use your mouse or trackpad to
            look around. Use your keyboard arrow keys to walk around. Find the
            red button and press it to play!
          </Text>
        </View>
        <VrButton style={styles.rootButton} onClick={this.handleClick}>
          <Text>Got it!</Text>
        </VrButton>
      </View>
    );
  }
}
