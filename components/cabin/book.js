import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


  
class Book  extends React.Component {
    state = {
        //starting value/initial value for y 
        yPosition: new Animated.Value(1),
        textureObj:'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj', 
        textureObjmtl: 'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl'
        
    };
    componentDidMount(){
  
    }
    startFalling = () => {

        this.setState({
            textureObj:'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj', 
            textureObjmtl: 'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl'
        })

        //onmousehover (onEnter - in invoked when cursor is
        // inside the shape of an object) the y position starts changing 
 
        // Animated.timing(
        //     this.state.yPosition,
        //     {
        //       toValue: -2,
        //       duration: 5000,
        //       delay: 100,
        //       easing: Easing.quad
        //     }
        //     //toValue target value for y, in our case the floor 
        //     //dealy means every 0.1 sec (100mlsec) the value of yPosition changes
        //     //setting easing to easing.bounce means object trajectory beahves like a ball that falls on the ground
        //     //easing.quad - realtion is quadratic not linear -> velocity relation to time
            
        //   ).start(()=> { this.setState({
        //     textureObj:'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj', 
        //     textureObjmtl: 'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl'
        // })})

     
        

          console.log('state', this.state)

     

          //Animated.timing updates the state until the target calue (toValue) is reached
    }


    render() {
        const yPosition = this.state.yPosition
        console.log(yPosition._value, 'yPosition')
        console.log(yPosition)

        return (
            <View>
                <VrButton onClick={this.startFalling}>
                    <AnimatedEntity 
                    
                    source={{
                    obj: asset(this.state.textureObj),
                    mtl: asset(this.state.textureObjmtl),
                    }}
                    lit={true}
                    style={{
                    transform: [
                        { translate: [-2, -5, -3] },
                        { translateY: yPosition },
                        { scaleX: 0.9 },
                        { scaleY: 0.9},
                        { scaleZ: 0.9 },
                    ],
                

                    }}
                        />

                </VrButton>
            </View>
        )
    }
}

export default Book
