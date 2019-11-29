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
  PointLight
} from 'react-360';
import Entity from 'Entity';
import {
  AppRegistry,
  PanResponder,

  Dimensions
} from "react-native";

let torchOffObj = '3d_light/1(standart).obj'
let torchOffMtl = '3d_light/1(standart).obj'
let torchOnObj = '3d_globe/magic_sphere.obj' 
let torchOnMtl = '3d_globe/magic_sphere.mtl' 

let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class CardBoard extends React.Component {
  state = {
    //starting value/initial value for y 
    clicked: true,
    yPosition: new Animated.Value(1),
    textureObj: '3d_cardboard/cardboard.obj',
    textureObjmtl:'3d_cardboard/cardboard.mtl',

    torchObj:[torchOffObj,torchOffObj,torchOffObj ,torchOffObj ,torchOffObj ],
    torchmtl:[torchOffMtl ,torchOffMtl  ,torchOffMtl  ,torchOffMtl ,torchOffMtl ],

  };

  componentDidMount() {

  }

  startTimer = () => {

    let time = 12001

    let state1obj = [torchOnObj,torchOffObj,torchOffObj ,torchOffObj ]
    let state1mtl = [torchOnMtl ,torchOffMtl  ,torchOffMtl  ,torchOffMtl ]

    let state2obj = [torchOnObj,torchOnObj,torchOffObj ,torchOffObj  ]
    let state2mtl = [torchOnMtl ,torchOnMtl  ,torchOffMtl  ,torchOffMtl ]
    
    let state3obj = [torchOnObj,torchOnObj,torchOnObj ,torchOffObj  ]
    let state3mtl = [torchOnMtl ,torchOnMtl  ,torchOnMtl  ,torchOffMtl ]

    let state4obj = [torchOnObj,torchOnObj,torchOnObj ,torchOnObj ]
    let state4mtl = [torchOnMtl ,torchOnMtl  ,torchOnMtl  ,torchOnMtl  ]

 
    while(time > 1){
        time=time-3000; 



        if(time === 9001){
            console.log(time, 'zmiana 1')
        this.setState({
            torchObj:state1obj,  
            torchmtl: state1mtl
        })} else {


        setTimeout(()=>{


                console.log(time, 'time2')
                this.setState({
                    torchObj:state2obj,  
                    torchmtl: state2mtl
                })
    
            } ,3000)


            setTimeout(()=>{


                console.log(time, 'time3')
                this.setState({
                    torchObj:state3obj,  
                    torchmtl: state3mtl
                })
    
            } ,6000)


            setTimeout(()=>{


                console.log(time, 'time4')
                this.setState({
                    torchObj:state4obj,  
                    torchmtl: state4mtl
                })
    
            } ,9000)
        }


        

    }

    return 


  }


  render() {


    return ( <View >

      <VrButton onClick = { () => 
        this.startTimer()
      } >
      <AnimatedEntity

      source = {
        {
          obj: asset(this.state.textureObj),
          mtl: asset(this.state.textureObjmtl),
        }
      }
      lit = {
        true
      }
      style = {
        { //not this capboard 
          transform: [{
              translate: [-10, -6, -1]
            },
            {
              scaleX: 0.04
            },
            {
              scaleY: 0.04
            },
            {
              scaleZ: 0.04
            },
          ],


        }
      }
      />

      </VrButton>


      <VrButton>

        <AnimatedEntity

        source = {
        {
            obj: asset(this.state.torchObj[0]),
            mtl: asset(this.state.torchmtl[0]),
        }
        }
        lit = {
        true
        }
        style = {
        {
            transform: [{
                translate: [-9, -2, 4]
            },
            {
                scaleX: 0.05
            },
            {
                scaleY: 0.05
            },
            {
                scaleZ: 0.05
            },
            ],


        }
        }
        />

            <AnimatedEntity

            source = {
            {
                obj: asset(this.state.torchObj[1]),
                mtl: asset(this.state.torchmtl[1]),
            }
            }
            lit = {
            true
            }
            style = {
            {
                transform: [{
                    translate: [-2,-1, -3]
                },
                {
                    scaleX: 0.05
                },
                {
                    scaleY: 0.05
                },
                {
                    scaleZ: 0.05
                },
                ],


            }
            }
            />


        <AnimatedEntity

        source = {
        {
            obj: asset(this.state.torchObj[2]),
            mtl: asset(this.state.torchmtl[2]),
        }
        }
        lit = {
        true
        }
        style = {
        {
            transform: [{
                translate: [-12, -2, -1]
            },
            {
                scaleX: 0.05
            },
            {
                scaleY: 0.05
            },
            {
                scaleZ: 0.05
            },
            ],


        }
        }
        />
        <AnimatedEntity

        source = {
        {
            obj: asset(this.state.torchObj[3]),
            mtl: asset(this.state.torchmtl[3]),
        }
        }
        lit = {
        true
        }
        style = {
        {
            transform: [{
                translate: [-10, 5, -1]
            },
            {
                scaleX: 0.05
            },
            {
                scaleY: 0.05
            },
            {
                scaleZ: 0.05
            },
            ],


        }
        }
        />

 

      </VrButton>


      </View>
    )
  }
}


export default CardBoard
