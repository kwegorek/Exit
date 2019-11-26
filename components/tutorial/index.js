import React from 'react';
import { View, Environment, asset } from 'react-360';
import Entity from 'Entity';
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('tutorial mounted!');
  }
  handleClick() {
    this.props.changeLocation('cabin');
  }
  render() {
    return (
      <Entity
        source={{
          obj: asset('3d_mario/mario-sculpture.obj'),
          mtl: asset('3d_mario/mario-sculpture.mtl'),
        }}
        lit={true}
        style={styles.mario}
        onInput={() => this.handleClick()}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Tutorial);
