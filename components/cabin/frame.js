
import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

// const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Frame extends React.Component {
    state = {
        // yPosition: new Animated.Value(1),
        textureObj:'frame/frame.obj',
        textureMtl:'frame/frame.mtl'

    };
    componentDidMount(){

    }
    // startFalling = () => {
    //     Animated.timing(
    //         this.state.yPosition,
    //         {
    //           toValue: -10,
    //           duration: 5000,
    //           delay: 100,
    //           easing: Easing.quad
    //         }
    //       ).start(()=> { this.setState({
    //         textureObj:'key/devils-key.obj',
    //         textureMtl:'key/devils-key.mtl'
    //     })})




        //   console.log('state', this.state)

    // }


    render() {
        // const yPosition = this.state.yPosition
        // console.log(yPosition._value, 'yPosition')
        // console.log(yPosition)

        return (

            <View>

                {/* <AnimatedEntity onEnter={this.startFalling} */}
                <Entity
                source={{
                obj: asset(this.state.textureObj),
                mtl: asset(this.state.textureMtl),
                }}
                lit={true}
                style={{
                transform: [
                    { translate: [750, -400,500] },
                    { rotateX: 270 },
                    { rotateZ: 50 },
                    // { translateZ: yPosition },
                    { scaleX: 10.00 },
                    { scaleY: 10.00 },
                    { scaleZ: 10.00},
                ],


                }}
                    />
            </View>
        )
    }
}

export default Frame
