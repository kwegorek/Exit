import React from 'react';
import {
  asset,
  Animated,
  View,
  VrButton,
  PointLight,
  NativeModules,
} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;
class Bookshelf extends React.Component {
  // state = {
  //     fade: 0.0,
  //     isFading: true
  // };

  // componentDidMount(){
  //     setInterval(() => {
  //         this.setState((prev) => {
  //             const isMaxOrMinValue = (prev.fade >= 1.0 || prev.fade <= 0.0)
  //             const newIsFading = (isMaxOrMinValue ? !prev.isFading : prev.isFading)
  //             const newFade = prev.fade + (newIsFading ? -0.04 : 0.04)
  //            // console.log(newFade)
  //             return {
  //                 fade: newFade,
  //                 isFading: newIsFading
  //             }
  //         });
  //     }, 400);
  //}
  handleClick = () => {
    AudioModule.playOneShot({
      source: asset('creepy.wav'),
    });
  };
  render() {
    // const opacityValue = this.state.fade
    return (
      <View>
        <VrButton onClick={this.handleClick}>
          <Entity
            source={{
              obj: asset('3d_bookshelf/Old_Dusty_Bookshelf.obj'),
              mtl: asset('3d_bookshelf/Old_Dusty_Bookshelf.mtl'),
            }}
            style={{
              transform: [
                { translate: [-100, -650, -750] },
                { scaleX: 3 },
                { scaleY: 3 },
                { scaleZ: 3 },
              ],
              color: 'white',
            }}
            lit={true}
          ></Entity>
        </VrButton>
      </View>
    );
  }
}

export default Bookshelf;
