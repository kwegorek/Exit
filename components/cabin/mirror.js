import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


const showCursor = (evt) => {

    console.log('window responds', this)
    // console.log(evt, 'event')
    // console.log(evt.clientX, 'eventX')
    // console.log(evt.clientX, 'eventY')
  }

 
  
class Mirror extends React.Component {
    state = {
        //starting value/initial value for y 
        close:true, 
        textureObj:'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj', 
        textureObjmtl: 'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl'
        
    };
    componentDidMount(){
        window.addEventListener('click', showCursor(evt))
  
    }
    
    openOrclose = () => {


        if(this.state.close === true){
            this.setState({
                textureObj:'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj', 
                textureObjmtl: 'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl',
                close:false

            })
        }else{
            this.setState({
                textureObj:'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj', 
                textureObjmtl: 'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl',
                close:true
            })
        }
    }

    onpress = (e) => {
        console.log("---->", e)
    }


    onrelease = (e) => {
        console.log("---->2", e)
       
    }


    render() {

        return (
            <View >
                {/* <VrButton onClick={this.openOrclose}> */}
                <VrButton onButtonPress={this.onpress} onButtonRelease={this.onrelease}>
                    <AnimatedEntity 
                    
                    source={{
                    obj: asset(this.state.textureObj),
                    mtl: asset(this.state.textureObjmtl),
                    }}
                    lit={true}
                    style={{
                    transform: [
                        { translate: [-8, -6, -1] },
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

export default Mirror
