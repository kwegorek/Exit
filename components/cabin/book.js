import React from "react";
import { asset, Animated, View, VrButton, NativeModules ,Text} from "react-360";
import Entity from "Entity";
const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
    textureObjmtl:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
      info :'',
      fade: new Animated.Value(0),
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj",
        textureObjmtl:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl",
        close: false,
        info: 'The riddle for next clue'
      });
    } else {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
        textureObjmtl:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
        close: true,

      });
    }
  };


  componentDidUpdate() {
    const { close } = this.state;
    const value = close ? 0 : 1;
    Animated.timing(
      this.state.fade,
      {
        toValue: value,
        duration: 3000,
      }
    ).start();
  }

  handleClick = () => {
    this.openOrclose();
    AudioModule.playOneShot({
      source: asset("magic.wav")
    });
  };

  render() {
    const { fade } = this.state;
    return (
      <View>
        <Animated.Text style={[{
    color: 'black',
    fontSize: 6,
    fontWeight: 'bold',
    textAlign:'left'
  },{ opacity: fade }]}>
          {this.state.info}
        </Animated.Text>
        <VrButton onClick={this.handleClick}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
              mtl: asset(this.state.textureObjmtl)
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-600, -500, -200] },
                { scaleX: 80.0 },
                { scaleY: 80.0 },
                { scaleZ: 80.0 }
              ]
            }}
          />
        </VrButton>
      </View>
    );
  }
}

export default Book;
