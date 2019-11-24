import React from 'react';
import {  asset, Animated, View,  VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class MagicSphere extends React.Component {

    state = {
        fade: 0.0,
        isFading: true
    };
    
    componentDidMount(){
        setInterval(() => {
            this.setState((prev) => {
                const isMaxOrMinValue = (prev.fade >= 1.0 || prev.fade <= 0.0)
                const newIsFading = (isMaxOrMinValue ? !prev.isFading : prev.isFading)
                const newFade = prev.fade + (newIsFading ? -0.04 : 0.04)
               // console.log(newFade)
                return {
                    fade: newFade, 
                    isFading: newIsFading
                }
            });
        }, 400);
    }

    // componentDidUpdate() {
    //     Animated.timing(
    //         this.state.fade,
    //         {
    //         toValue: 1,
    //         duration: 100,
    //         }
    //     ).start();  
    // }

    render() {
        const opacityValue = this.state.fade
        return (

            <View>
    
                <Entity source={{
                obj: asset('3d_bookshelf/Old_Dusty_Bookshelf.obj'),
                mtl: asset('3d_bookshelf/Old_Dusty_Bookshelf.mtl'),
                }} style={{
                transform: [
                    { translate: [-1, -5, -5] },
                    { scaleX: 0.023 },
                    { scaleY: 0.023 },
                    { scaleZ: 0.023},
                ],
                color: 'white',
                opacity: opacityValue
                
                }}      lit={true}>

                </Entity>

                <AnimatedEntity
               
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
                ],
               
                
                opacity: opacityValue
                
                }}
                    />
            </View>
        )
    }
}

export default MagicSphere