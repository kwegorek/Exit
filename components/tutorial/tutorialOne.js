import React from 'react';
import {
  Text,
  View,
} from 'react-360';
import styles from '../../components/styles'

export default class TutorialOne extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            EXIT
            use your mouse or trackpad to look around
          </Text>
        </View>
      </View>
    );
  }
};


