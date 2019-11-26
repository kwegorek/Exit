import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


  
class FallingPicture extends React.Component {
    state = {
        //starting value/initial value for y 
        yPosition: new Animated.Value(1),
        textureObj:'3d_globe/magic_sphere.obj'
        
    };
    componentDidMount(){
  
    }
    startFalling = () => {

        //onmousehover (onEnter - in invoked when cursor is
        // inside the shape of an object) the y position starts changing 
 
        Animated.timing(
            this.state.yPosition,
            {
              toValue: -2,
              duration: 5000,
              delay: 100,
              easing: Easing.quad
            }
            //toValue target value for y, in our case the floor 
            //dealy means every 0.1 sec (100mlsec) the value of yPosition changes
            //setting easing to easing.bounce means object trajectory beahves like a ball that falls on the ground
            //easing.quad - realtion is quadratic not linear -> velocity relation to time
            
          ).start(()=> { this.setState({
            textureObj:'3d_mario/mario-sculpture.obj'
        })})

     
        

          console.log('state', this.state)

     

          //Animated.timing updates the state until the target calue (toValue) is reached
    }


    render() {
        const yPosition = this.state.yPosition
        console.log(yPosition._value, 'yPosition')
        console.log(yPosition)

        return (
            
            <View>

                <AnimatedEntity onEnter={this.startFalling}
               	
                source={{
		
                obj: asset(this.state.textureObj),
                mtl: asset('3d_globe/magic_sphere.mtl'),
                }}
                lit={true}
                style={{
                transform: [
                    { translate: [-2, -2, -3] },
                    { translateY: yPosition },
                    { scaleX: 0.01 },
                    { scaleY: 0.01},
                    { scaleZ: 0.01 },
                ],
            
                
                }}
                    />
            </View>
        )
    }
}

export default FallingPicture
