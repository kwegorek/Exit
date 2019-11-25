import React from 'react';
import {  asset, Animated, View,  VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class MagicSphere extends React.Component {

    state = {
        rotation: new Animated.Value(0),
        isRotating: true
    };
    
    componentDidMount(){
       this.startRotate()
    }
    startRotate = () => {
        this.state.rotation.setValue(0)
        Animated.timing(this.state.rotation,
            {
                toValue: 360,
                duration: 10000,
            }
        ).start(this.startRotate)
    }
    
    stopRotate = () => {
        console.log("stop rotate")
        // this.setState({
        //         rotation: new Animated.Value(0),
        //         isRotating: false
        //     })
    }
    // startRotate = () => {
    //     this.setState({
    //         rotation: new Animated.Value(0),
    //         isRotating: true
    //     })
    //     this.rotate(true)
    // }
    // rotate = (forceRotate = false) => {
    //     console.log(JSON.stringify(forceRotate))
    //     if (forceRotate === true || this.state.isRotating) { 
    //         const newValue = this.state.rotation.getValue() === 360 ? 0 : 360;
    //         console.log("->rotate", newValue)
    //         Animated.timing(this.state.rotation,
    //             {
    //                 toValue: newValue,
    //                 duration: 10000,
    //             }
    //         ).start(this.rotate)
    //     } else {
    //         console.log("stopping")
    //     }
    // }
    // stopRotate = () => {
    //     console.log("stop rotate")
    //     this.setState({
    //             rotation: new Animated.Value(0),
    //             isRotating: false
    //         })
    // }

    render() {
        const rotationValue = this.state.rotation
        return (

            <View>
                <AnimatedEntity onEnter={this.startRotate} 
                 onExit={this.stopRotate}
               
                source={{
                obj: asset('3d_globe/magic_sphere.obj'),
                mtl: asset('3d_globe/magic_sphere.mtl'),
                }}
                lit={true}
                style={{
                transform: [
                    { translate: [0, -5, -3] },
                    { scaleX: 0.04 },
                    { scaleY: 0.04 },
                    { scaleZ: 0.04 },
                    { rotateY: rotationValue}
                ],
            
                
                }}
                    />
            </View>
        )
    }
}

export default MagicSphere