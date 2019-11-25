import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';
import styles from './styles';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Hey Tani and Aga</Text>
        </View>
      </View>
    );
  }
}
