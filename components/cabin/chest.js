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


let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Chest extends React.Component {
  state = {
    //starting value/initial value for y 
    clicked: true,
    yPosition: new Animated.Value(1),
    objAsset: ['3d_round_chest/chest04.obj','3d_chest/chest01.obj'],
    textureAsset:['3d_round_chest/copper.jpg','3d_chest/wood03.jpg'],
  };

  componentDidMount() {

  }

 showEscapeMap =() => {




 }


  render() {


    return ( <View >

      <VrButton>

     {/* round chest next to the table  */}
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
              translate: [-120, -200, 100]
            },
            {
              scaleX: 5.00
            },
            {
              scaleY: 5.00
            },
            {
              scaleZ: 5.00
            },
          ],


        }
      }
      />


<AnimatedEntity

source = {
  {
    obj: asset(this.state.objAsset[1]),
  }
}

lit = {
  true
}

texture = {asset(this.state.textureAsset[1])}
style = {
  {
    transform: [{
        translate: [-30, -200, 100]
      },
      {
        scaleX: 3.00
      },
      {
        scaleY: 3.00
      },
      {
        scaleZ: 3.00
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


export default Chest
