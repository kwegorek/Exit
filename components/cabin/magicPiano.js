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


let glassObj = '3d_glass_piano/szklanka+2.obj'
let glassTextureObj = '3d_glass_piano/oie_3022417tXo7WH59.jpg'

let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class MagicPiano extends React.Component {
  state = {
    //starting value/initial value for y 
    clicked: true,
    yPosition: new Animated.Value(1),
    tableAsset: '3d_piano/O&C_COFFEE TABLE_1200x600x450.obj',
    tableTextureAsset:'3d_piano/O&C_COFFEE TABLE_1200x600x450.mtl 2', 
    glassObj: glassObj, 
    glassTextureObj: glassTextureObj

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
          obj: asset(this.state.tableAsset),
          mtl: asset(this.state.tableTextureAsset)
        }
      }

      lit = {
        true
      }



    //   texture = {asset(this.state.tableTextureAsset)}
      style = {
        {
          transform: [{
              translate: [90, -220, 190]
            },
            {
              scaleX: 3.0
            },
            {
              scaleY: 3.0
            },
            {
              scaleZ: 3.0
            },
          ],


        }
      }
      />

      </VrButton>




      <VrButton>

     {/* round chest next to the table  */}
      <AnimatedEntity

      source = {
        {
          obj: asset(this.state.glassObj),
        //   mtl: asset(this.state.tableTextureAsset)
        }
      }

      lit = {
        true
      }



      texture = {asset(this.state.glassTextureObj)}
      style = {
        {
          transform: [{
              translate: [60, -200, 150]
            },
            {
              scaleX: 1.0
            },
            {
              scaleY: 1.0
            },
            {
              scaleZ: 1.0
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


export default MagicPiano
