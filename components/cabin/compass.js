import React from "react";
import { asset, Animated, View, VrButton } from "react-360";
import Entity from "Entity";
import { connect } from "react-redux";
import { disableAllClues } from "../../store/clues";
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
    ],
    currentlyDisplayedHint: "clues/chestClue.jpg"
  };
  componentDidMount() {}
  handleClicked = () => {
    this.props.disableClues("chestClue", "compassClue");
  };
  render() {
    const finalTaskStatus = this.props.musiscTask.musisctable;
    const chestClue = this.props.clues.chestClue;
    if (finalTaskStatus) {
      return (
        <View>
          <VrButton onClick={this.handleClicked}>
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
                    translate: [-50, -360, 305]
                  },
                  {
                    scaleX: 40.0
                  },
                  {
                    scaleY: 40.0
                  },
                  {
                    scaleZ: 40.0
                  }
                ]
              }}
            />
          </VrButton>
          {chestClue ? (
            <Animated.Image
              style={{
                position: "absolute",
                layoutOrigin: [0.5, 0.5, 0],
                width: 90,
                height: 60,
                transform: [{ translateZ: 170 }, { translateX: 60 }],
                opacity: 1
              }}
              source={asset(this.state.currentlyDisplayedHint)}
            />
          ) : null}
        </View>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    musiscTask: state.tasksCompleted,
    clues: state.clues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableClues: (cluesToEnable, cluesToDisable) =>
      dispatch(disableAllClues(cluesToEnable, cluesToDisable))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compass);
