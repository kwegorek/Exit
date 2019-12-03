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
      "chest/chest1/treasure-chest-model.mtl"
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
          "chest/chest2/animated-chest.obj",
        textureObjmtl:
          "chest/chest2/animated-chest.mtl",
        close: true
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
            style={{
              transform: [
                { translate: [200,-600, 700] },
                { scaleX: 80.0},
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
