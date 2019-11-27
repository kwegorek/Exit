import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import Entity from 'Entity';
import {
    AppRegistry,
    PanResponder,

    Dimensions
  } from "react-native";
  

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

// function logKey(e) {

//     console.log(e, 'event')

//   }

// const {
//     height: deviceHeight,
//     width: deviceWidth
//   } = Dimensions.get('window');

//   console.log(Dimensions.get('window'), 'dimension')
//   window.addEventListener('mousemove', logKey)
  
class CardBoard extends React.Component {
    state = {
        //starting value/initial value for y 
        clicked:true, 
        textureObj:'3d_cardboard/cardboard.obj', 
        textureObjmtl: '3d_cardboard/cardboard.mtl',

        
    };
    componentDidMount(){
  
    }

    
    releaseWizard = () => {
        console.log('clicked')


        if(this.state.clicked === true){
            console.log('clicked key background')
            this.setState({
                textureObj: '3d_key/Worn_Key.obj',
                textureObjmtl: '3d_key/Worn_Key.mtl',
                clicked:false

            })

            console.log(this.state, 'state----text key ')
        }else{
            console.log('cardboard mario background')
            this.setState({
          

                textureObj:'3d_cardboard/cardboard.obj', 
                textureObjmtl: '3d_cardboard/cardboard.mtl',
                clicked:true
            })
            

        }

    
    }


    render() {

        return (
            <View>
         
                 <VrButton onClick={this.releaseWizard}>
                    <AnimatedEntity 
                    
                    source={{
                    obj: asset(this.state.textureObj),
                    mtl: asset(this.state.textureObjmtl),
                    }}
                    lit={true}
                    style={{
                        transform: [
                            { translate: [-10, -6, -1] },
                            { scaleX: 0.04 },
                            { scaleY: 0.04},
                            { scaleZ: 0.04 },
                        ],
    

                    }} 
                        />

                </VrButton>
   
            </View>
        )
    }
}

export default CardBoard
