import React from 'react';
import {
  asset,
  Animated,
  View,
  VrButton,
  NativeModules,
  Text,
} from 'react-360';
import Entity from 'Entity';
import { disableAllExcept } from '../../store/buttons';
import { connect } from 'react-redux';
const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

let openedBookTexture =
  'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/Textures/ChurchBookOpenV2-DiffuseHints.png';

let closedBooktexture =
  'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/Textures/ChurchBookClosedV2-Diffuse.png';

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj:
      'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj',
    textureObjmtl:
      'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl',
    info: '',
    fade: new Animated.Value(0),
    // // =======
    //     closedBooktexture
    // >>>>>>> a62b124432b616430246e8385f960be292d991ba
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj',
        textureObjmtl:
          'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl',
        close: false,
        info: 'The riddle for next clue',
      });
    } else {
      this.setState({
        textureObj:
          'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj',
        textureObjmtl:
          'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl',
        close: true,
        info: '',
        fade: new Animated.Value(0),
      });
    }
  };
  componentDidUpdate() {
    const { close } = this.state;
    const value = close ? 0 : 1;
    Animated.timing(this.state.fade, {
      toValue: value,
      duration: 3000,
    }).start();
  }

  handleClick = () => {
    this.props.disableButtons('tableButton', 'bookButton');
    this.openOrclose();
    AudioModule.playOneShot({
      source: asset('magic.wav'),
    });
  };

  render() {
    const { fade } = this.state;
    const disableStatus = !this.props.buttons.bookButton;
    return (
      <View>
        <Animated.Text
          style={[
            {
              color: 'black',
              fontSize: 6,
              fontWeight: 'bold',
              textAlign: 'left',
            },
            { opacity: fade },
          ]}
        >
          {this.state.info}
        </Animated.Text>
        <VrButton onClick={this.handleClick} disabled={disableStatus}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-600, -500, -200] },
                { scaleX: 80.0 },
                { scaleY: 80.0 },
                { scaleZ: 80.0 },
              ],
            }}
            texture={asset(this.state.textureObjmtl)}
          />
        </VrButton>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapping state to book', state);
  return {
    buttons: state.buttons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
