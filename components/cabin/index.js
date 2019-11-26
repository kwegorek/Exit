import React from 'react';
import { View, Environment, asset } from 'react-360';
import Mario from './Mario';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';

export default class Cabin extends React.Component {
  componentDidMount() {
    console.log('cabin mounted!');
  }
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
