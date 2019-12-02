import React from 'react';
import {  asset, Animated, View,  VrButton, Text ,NativeModules} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;
class Face extends React.Component {

    state = {
        fade: 0.0,
        isFading: true,
        textFade: new Animated.Value(0),
        tableClue: false,
        src:"Clues/tableClue.jpg"

    };

    componentDidMount(){
        setInterval(() => {
            this.setState((prev) => {
                const isMaxOrMinValue = (prev.fade >= 1.0 || prev.fade <= 0.0)
                const newIsFading = (isMaxOrMinValue ? !prev.isFading : prev.isFading)
                const newFade = prev.fade + (newIsFading ? -0.04 : 0.04)
                return {
                    fade: newFade,
                    isFading: newIsFading
                }
            });
        }, 200);
    }
    // componentDidUpdate() {
    //     Animated.timing(
    //       this.state.textFade,
    //       {
    //         toValue: value,
    //         duration: 3000,
    //       }
    //     ).start();
    //   }
    handleClick=()=>{
        AudioModule.playOneShot({
            source: asset('Laugh.wav'),
          });
        //  Animated.timing(
        //     this.state.textFade,
        //     {
        //       toValue: 1,
        //       duration: 3000,
        //     }
        //   ).start();
          this.setState({
            tableClue: true
          })
    }
    render() {
        const opacityValue = this.state.fade
        return (

            <View>
                 {/* <Animated.Text style={[{
    color: 'black',
    fontSize: 6,
    fontWeight: 'bold',
  },{ opacity: this.state.textFade }]}>
          {this.state.newInfo}
        </Animated.Text> */}
                <VrButton onClick={this.handleClick}>
                <Entity source={{
                obj: asset('face/151out.obj'),
                }} style={{
                transform: [
                    { translate: [750, -270,500] },
                   { rotateX: 270 },
                   { rotateZ: 50 },
                    { scaleX: 30.00 },
                    { scaleY: 30.00 },
                    { scaleZ: 30.00},
                ],
                color: 'white',
                opacity: opacityValue

                }}      lit={true}>

                </Entity>
                </VrButton>
                {this.state.mirrorClue ?
        <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: 2,
          height: 2,
          transform: [

            {translateZ: -3},

            {translateX: -1.0}
          ],
          opacity: 1,
        }}
        source={ asset(this.state.src)}
      />: null}
            </View>
        )
    }
}

export default Face
