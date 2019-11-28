import React from 'react';
import { Text, View, VrButton } from 'react-360';
import styles from '../styles';
import { NativeModules } from 'react-360';
const { SurfaceModule } = NativeModules;

export default class CandleSurface extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //unmount tutorial surrface
    console.log('unmounting surface');
    SurfaceModule.changeSurfaceSize('CandleSurface', 1, 1);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            *Riddle about finding 3 candles* 
          </Text>
        </View>
        <VrButton style={styles.rootButton} onClick={this.handleClick}>
          <Text>Got it!</Text>
        </VrButton>
      </View>
    );
  }
}