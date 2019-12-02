import React from 'react';
import { View, Environment, asset, NativeModules, VrButton } from 'react-360';
import EscapedSurface from './escapedSurface';
const { SurfaceModule } = NativeModules;

export default class ExitPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //mount winner surface
    SurfaceModule.changeSurfaceSize('EscapedSurface', 1000, 1000);
    console.log('escaped room component mounted');
  }
  render() {
    return null;
  }
}


