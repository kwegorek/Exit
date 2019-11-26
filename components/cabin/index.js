import React from 'react';
import { View, Environment, asset } from 'react-360';
import Mario from './Mario';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';
import FallingPicture from './fallingPicture'
<<<<<<< HEAD
=======
import Book from './book'
import Table from './Table'
import AncientPaper from './ancientPaper'
>>>>>>> fae004481ebe059f746736a51ca17b570e9d84b3
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';

class Cabin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEscapeKey = this.handleClickEscapeKey.bind(this);
  }
  componentDidMount() {
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
        <Mario handleClickEscapeKey={this.handleClickEscapeKey} />
        <Bookshelf />
        <MagicSphere />
        <FallingPicture />
<<<<<<< HEAD
=======
        <Book/>
        <Table />
>>>>>>> fae004481ebe059f746736a51ca17b570e9d84b3
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
