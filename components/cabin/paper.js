import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


  
class Paper extends React.Component {
    state = {
        //starting value/initial value for y 
        yPosition: new Animated.Value(1),
        textureObj:'3d_book/bookmodel.obj', 
        textureObjmtl: '3d_book/bookmodel.mtl'
        
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
            textureObj:'3d_book/bookmodel.obj', 
            textureObjmtl: '3d_book/bookmodel.mtl'
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
                <VrButton>
                    <AnimatedEntity onEnter={this.startFalling}
                    
                    source={{
                    obj: asset(this.state.textureObj),
                    mtl: asset(this.state.textureObjmtl),
                    }}
                    lit={true}
                    style={{
                    transform: [
                        { translate: [-1, -5, -3] },
                        { translateY: yPosition },
                        { scaleX: 0.1 },
                        { scaleY: 0.1},
                        { scaleZ: 0.1 },
                    ],
                
                    }}
                        />

                </VrButton>
            </View>
        )
    }
}

export default Paper
