/* eslint-disable no-loop-func */
import React from 'react';
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
    objAsset: ['3d_globe/magic_sphere.obj'],
    textureAsset:['3d_globe/TexturesCom_MetalBare0150_1_seamless_S.jpg'],
  };

  componentDidMount() {

  }

  render() {

    return ( 

    <View >
        <VrButton>
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
                    translate: [-240, -125, -60]
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
        </VrButton>

      </View>
    )
  }
}


export default MagicGlass
