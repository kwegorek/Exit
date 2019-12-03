import React from "react";
import { asset, Animated, View, VrButton, NativeModules } from "react-360";
import Entity from "Entity";
import { Easing } from 'react-native';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj: "chest/chest1/treasure-chest-model.obj",
    textureObjmtl: "chest/chest1/treasure-chest-model.mtl",
    styles: {
      transform: [
        { translate: [200, -600, 700] },
        { scaleX: 100.0 },
        { scaleY: 100.0 },
        { scaleZ: 100.0 }
      ]
    },
    clickedOnce: false,
    zPosition: new Animated.Value(1),
  };
  moveToSkeleton = () => {
    console.log("trying to move to skeleton")
    Animated.timing(
                  this.state.zPosition,
                  {
                    toValue: -900,
                    duration: 5000,
                    delay: 100,
                    easing: Easing.quad
                  }).start(()=> { this.setState({
                    textureObj: "3d_hat/witch_hat(POSER).obj",
                    textureObjmtl: "3d_hat/witch_hat.mtl",
                    styles: {
                      transform: [
                        { translate: [200, -500, 700] },
                        { translateZ: this.state.zPosition },
                        { scaleX: 700.0 },
                        { scaleY: 700.0 },
                        { scaleZ: 700.0 }
                      ]
                    }
                })})

  };
  openOrclose = () => {

      this.setState({
        textureObj: "3d_hat/witch_hat(POSER).obj",
        textureObjmtl: "3d_hat/witch_hat.mtl",
        styles: {
          transform: [
            { translate: [200, -500, 700] },
            { rotateY: 200 },
            { scaleX: 700.0 },
            { scaleY: 700.0 },
            { scaleZ: 700.0 }
          ]
        }
      });

  };

  handleClick = () => {
    this.openOrclose();
    this.state.clickedOnce = true;
    if (this.state.clickedOnce) this.moveToSkeleton();
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
