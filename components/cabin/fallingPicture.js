import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import { connect } from 'react-redux';
import { getAllCompleted } from '../../store/buttons';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);



class FallingPicture extends React.Component {
    state = {
        //starting value/initial value for y
        yPosition: new Animated.Value(1),
        textureObj:'painting1/objPainting.obj',
        textureMtl:'painting1/objPainting.mtl'
    };
    componentDidMount(){
        console.log('falling pic monuted')

        // this.props.allTasks;
        // console.log(this.props.allTasks, '---------->-------allTasks')

        // this.props.gotAllCompleted();
        // const completedTasks = this.props.gotAllCompleted();
        // console.log('these are the completed tasks', completedTasks); 
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
            textureObj:'3d_mario/mario-sculpture.obj',
            textureMtl: '3d_mario/mario-sculpture.mtl'
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

                <AnimatedEntity 
                // onEnter={this.startFalling}

                source={{
                obj: asset(this.state.textureObj),
                mtl: asset(this.state.textureMtl),
                }}
                lit={true}
                style={{
                transform: [
                    { translate: [-600, -100, 800] },
                    { translateY: yPosition },
                    { rotateY: 150 },
                    { scaleX: 5 },
                    { scaleY: 5 },
                    { scaleZ: 5 },
                ],


                }}
                    />
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        allTasks: state.buttons
      
    }
  
  }
  
  
const mapDispatchToProps = (dispatch) => {

return {
    gotAllCompleted: () => dispatch(getAllCompleted())
    
}


}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(FallingPicture);