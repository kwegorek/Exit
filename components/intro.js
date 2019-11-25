
import React from 'react';
import {StyleSheet, Text, View } from 'react-360';
// import styles from './styles';


export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
         <Text >
          {'Hello -----------------Useer'}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'green',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});
