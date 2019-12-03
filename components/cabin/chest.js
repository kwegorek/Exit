import React from "react";
import { asset, Animated, View, VrButton, NativeModules } from "react-360";
import Entity from "Entity";
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj:
      "chest/chest1/treasure-chest-model.obj",
    textureObjmtl:
      "chest/chest1/treasure-chest-model.mtl",
      styles:{
        transform: [
          { translate: [200,-600, 700] },
          { scaleX: 100.0},
          { scaleY: 100.0 },
          { scaleZ: 100.0 }
        ]
      }
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          "chest/chest1/treasure-chest-model.obj",
        textureObjmtl:
          "chest/chest1/treasure-chest-model.mtl",
        close: false
      });
    } else {
      this.setState({
        textureObj:
        '3d_hat/witch_hat(POSER).obj',
        textureObjmtl:
        '3d_hat/witch_hat.mtl',
        close: true,
        styles:{
          transform: [
            { translate: [200,-700, 700] },
            { rotateY: 200 },
            { scaleX: 700.0},
            { scaleY: 700.0 },
            { scaleZ: 700.0 }
          ]
        }
      });
    }
  };

  handleClick = () => {
    this.openOrclose();
  };

  render() {
    return (
      <View>
        <VrButton onClick={this.handleClick}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
              mtl: asset(this.state.textureObjmtl)
            }}
            lit={true}
            style={this.state.styles}
          />
        </VrButton>
      </View>
    );
  }
}

export default Book;
