import React from 'react';
import { View, NativeModules } from 'react-360';
import Skeleton from './Skeleton';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';
import Hat from './hat'
import FallingPicture from './fallingPicture';
import Book from './book';
import Table from './Table';
import AncientPaper from './ancientPaper';
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';

const { SurfaceModule } = NativeModules;

class Cabin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEscapeKey = this.handleClickEscapeKey.bind(this);
  }
  async componentDidMount() {
    await SurfaceModule.renderNavBar();
    console.log('DO', window.document);
    console.log('cabin mounted!');
  }
  handleClickEscapeKey() {
    //unmount navbar
    //mount winner surface
    this.props.changeLocation('cabinEscaped');
  }
  handleLostGame() {
    //unmount navbar
    //mount loser surface
  }
  render() {
    return (
      <View>
        <Skeleton />
        <Hat />
        <Bookshelf />
        <MagicSphere />
        <FallingPicture />
        <Book />
        <Table />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Cabin);
