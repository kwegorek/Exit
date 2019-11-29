import React from "react";
import { asset, Animated, View, VrButton, NativeModules } from "react-360";
import Entity from "Entity";
const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);


let openedBookTexture = 'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/Textures/ChurchBookOpenV2-DiffuseHints.png'

let closedBooktexture = 'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/Textures/ChurchBookClosedV2-Diffuse.png'

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
    textureObjmtl:
    closedBooktexture
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj",
        textureObjmtl:
        openedBookTexture,
        close: false
      });
    } else {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
        textureObjmtl:
        closedBooktexture,
        close: true
      });
    }
  };

  handleClick = () => {
    this.openOrclose();
    AudioModule.playOneShot({
      source: asset("magic.wav")
    });
  };

  render() {
    return (
      <View>
        <VrButton onClick={this.handleClick}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-8, -6, -1] },
                { scaleX: 0.9 },
                { scaleY: 0.9 },
                { scaleZ: 0.9 }
              ]

            }}

            texture = {asset(this.state.textureObjmtl)}
          />
        </VrButton>
      </View>
    );
  }
}

export default Book;
