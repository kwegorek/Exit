import React from 'react';
import {
  Text,
  View,
} from 'react-360';
import styles from '../../components/styles'

export default class TutorialTwo extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
           Use your keyboard arrow keys to move around
          </Text>
        </View>
      </View>
    );
  }
};
