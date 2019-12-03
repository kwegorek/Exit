/* eslint-disable no-loop-func */
import React from 'react';
import {
  Easing
} from 'react-native';
import {
  asset,
  Animated,
  View,
  VrButton,
} from 'react-360';
import Entity from 'Entity';
import { connect } from 'react-redux';


let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class MagicSphere extends React.Component {

    state = {
        rotation: new Animated.Value(0),
        inMotion: false
    };


    startRotateOrStop = () => {
        if(this.state.inMotion === false ) {

            this.state.rotation.setValue(0)
            Animated.timing(this.state.rotation,
                {
                    toValue: 360,
                    duration: 6000,
                }
            ).start(this.startRotate)
        } 
    } 



    render() {
        const rotationValue = this.state.rotation
        return (

            <View>
                <VrButton onClick={() => this.startRotate()}>
                <AnimatedEntity 
                 onExit={this.stopRotate}

                source={{
                obj: asset('spider/Only_Spider_with_Animations_Export.obj'),
                mtl: asset('spider/Only_Spider_with_Animations_Export.mtl'),
                }}
                lit={true}
                style={{
                transform: [
                    { translate: [0, -5, -3] },
                    { scaleX: 0.008 },
                    { scaleY: 0.008 },
                    { scaleZ: 0.008 },
                    { rotateY: rotationValue}
                ],


                }}
                    />
                </VrButton>
            </View>
        )
    }
}


mapDispatchToProps = (dispatch) => {

  return {


  }


}


export default connect(null, mapDispatchToProps)(MagicSphere);


