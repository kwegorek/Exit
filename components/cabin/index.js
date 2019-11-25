import React from 'react';
import { View } from 'react-360';
import Mario from './Mario';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';

export default class Cabin extends React.Component {
  render() {
    return (
      <View>
        <Mario />
        <Bookshelf />
        <MagicSphere />
      </View>
    );
  }
}
