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

class MagicGlass extends React.Component {
  state = {
    //starting value/initial value for y 
    clicked: true,
    yPosition: new Animated.Value(1),
    objAsset: ['3d_globe/magic_sphere.obj','3d_hintboard/placa.obj'],
    textureAsset:['3d_globe/TexturesCom_MetalBare0150_1_seamless_S.jpg','3d_chest/wood03.jpg'],
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
              translate: [-130, -200, -80]
            },
            {
              scaleX: 1.00
            },
            {
              scaleY: 1.00
            },
            {
              scaleZ: 1.00
            },
          ],


        }
      }
      />


          {/* round chest next to the table  */}
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
        translate: [60, -70, 170]
      },
      {
        scaleX: 4.00
      },
      {
        scaleY: 4.00
      },
      {
        scaleZ: 4.00
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


export default MagicGlass
