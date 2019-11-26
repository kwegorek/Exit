import React from 'react';
import { View, Environment, asset } from 'react-360';
import Mario from './Mario';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';
import FallingPicture from './fallingPicture';

export default class Cabin extends React.Component {
  componentDidMount() {
    console.log('cabin mounted');
    Environment.setBackgroundImage(asset('360mansion.jpg'))
  }
  render() {
    return (
      <View>
        <Mario />
        <Bookshelf />
        <MagicSphere />
        <FallingPicture />
      </View>
    );
  }
}
