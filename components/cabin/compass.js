import React from "react";
import { Easing } from "react-native";
import { asset, Animated, View, VrButton } from "react-360";
import Entity from "Entity";
import { connect } from "react-redux";
let AnimatedEntity = Animated.createAnimatedComponent(Entity);
class Compass extends React.Component {
  state = {
    fade: 0.0,
    isFading: true,
    yPosition: new Animated.Value(1),
    objAsset: [
      "3d_direction/directional-generic-marker.obj",
      "3d_compass/3d-model.obj"
    ],
    textureAsset: [
      "3d_direction/irregular_stone_wall.png",
      "3d_compass/metal_compass.jpeg"
    ]
  };
  componentDidMount() {}
  showEscape = () => {
    setInterval(() => {
      this.setState(prev => {
        const isMaxOrMinValue = prev.fade >= 1.0 || prev.fade <= 0.0;
        const newIsFading = isMaxOrMinValue ? !prev.isFading : prev.isFading;
        const newFade = prev.fade + (newIsFading ? -0.04 : 0.04);
        return {
          fade: newFade,
          isFading: newIsFading
        };
      });
    }, 400);
  };
  render() {
    const opacityValue = this.state.fade;
    const finalTaskStatus = this.props.musiscTask.musisctable;
    if (finalTaskStatus) {
      return (
        <View>
          <VrButton onClick={() => this.showEscape()}>
            {/* //compasss object  */}
            <AnimatedEntity
              source={{
                obj: asset(this.state.objAsset[1])
              }}
              lit={true}
              texture={asset(this.state.textureAsset[1])}
              style={{
                transform: [
                  {
                    translate: [30, -110, 150]
                  },
                  {
                    scaleX: 20.0
                  },
                  {
                    scaleY: 20.0
                  },
                  {
                    scaleZ: 20.0
                  }
                ]
              }}
            />
          </VrButton>
        </View>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    musiscTask: state.tasksCompleted
  };
};
export default connect(
  mapStateToProps,
  null
)(Compass);
