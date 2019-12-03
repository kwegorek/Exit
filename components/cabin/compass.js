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

class Compass extends React.Component {
  state = {
    //starting value/initial value for y
   
    yPosition: new Animated.Value(1),
    objAsset: ['3d_compass/3d-model.obj',],
    textureAsset:['3d_compass/metal_compass.jpeg'],
    currentlyDisplayedHint: '3d_hintboard/flippedHint.png', // hint for compass
  };

 componentDidMount(){

    }

    showChestHint=()=>{
   this.setState({
    currentlyDisplayedHint : '3d_hintboard/flippedHint.png'})// new hint for chest
    }


  render() {

        // const opacityValue = this.state.fade
        const finalTaskStatus = this.props.musiscTask.musisctable

        if(finalTaskStatus){

          return ( <View >

            <VrButton onClick={()=>this.showChestHint()}>

              {/* //compasss object  */}
           <AnimatedEntity

      source = {
        {
          obj: asset(this.state.objAsset[0]),
        }
      }

      lit = {
        true
      }

      texture = {asset(this.state.textureAsset[0])}
      style = {
        {
          transform: [{
              translate: [30, -110, 150]
            },
            {
              scaleX: 20.00
            },
            {
              scaleY:20.00
            },
            {
              scaleZ: 20.00
            },
          ],


        }
      }
      />


            </VrButton>
            <Animated.Image
          style={{
            position: 'absolute',
            layoutOrigin: [0.5, 0.5, 0],
            width: 90,
            height: 60,
            transform: [{ translateZ: 170 }, { translateX: 60 }],
            opacity: 1,
          }}
          source={asset(this.state.currentlyDiplayedHint)}
        />




            </View>
          )



        }else{
          return null
        }



  }
}

const mapStateToProps = (state) => {

  return {
    musiscTask: state.tasksCompleted
  }
}


export default connect(mapStateToProps, null)(Compass);
