/* eslint-disable no-loop-func */
import React from 'react';
import {
  Easing
} from 'react-native';
import {
  asset,
  Animated,
  View,
  VrButton,NativeModules 
} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;

//regular color 
let glassObj = '3d_glass_piano/szklanka+2.obj'
let glassTextureObjRegular = '3d_glass_piano/glass-v2.jpg'

//glass color variabels 
let glassTextureObjDarkYellow = '3d_glass_piano/oie_3022417tXo7WH59.jpg'
let glassTextureObjBlue = '3d_glass_piano/blue_glass.png'
let glassTextureObjBlack = '3d_glass_piano/black_glass.png'
let glassTextureObjPink= '3d_glass_piano/pink_glass.png'
let glassTextureObjBrown = '3d_glass_piano/light_borwn_glass.png'
let glassTextureObjGrey = '3d_glass_piano/grey_glass.jpg'
let glassTextureObjLightPink = '3d_glass_piano/light_pink_glass.png'
let glassTextureObjDarkGrey = '3d_glass_piano/dark_grey.jpg'


//music variables
let noteMidC = '3d_glass_piano/Hear Piano Note - Middle C.wav'
let noteD = '3d_glass_piano/Hear Piano Note - D.wav'
let noteE = '3d_glass_piano/Hear Piano Note - Mid E.wav'
let noteF = '3d_glass_piano/Hear Piano Note - Mid F.wav'
let noteG = '3d_glass_piano/Hear Piano Note - Mid G.wav'
let noteA = '3d_glass_piano/Hear Piano Note - Mid A.wav'
let noteB= '3d_glass_piano/Hear Piano Note - Mid B.wav'
let noteC = '3d_glass_piano/Hear Piano Note - Middle C.wav'


let arrOfTextures = [glassTextureObjDarkGrey,glassTextureObjLightPink,glassTextureObjDarkYellow,glassTextureObjBlue,glassTextureObjGrey, glassTextureObjBlack,glassTextureObjPink,glassTextureObjBrown,]


let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class MagicPiano extends React.Component {
  playSound = (sound) => {
    AudioModule.stopEnvironmental()
    AudioModule.playOneShot({
      source: asset(sound)
    });
  }

  playNoteMidC = () => {
    this.playSound(noteMidC)
  }
  playNoteD = () => {
    this.playSound(noteD)
  }
  playNoteE = () => {
    this.playSound(noteE)
  }
  playNoteF = () => {
    this.playSound(noteF)
  }
  playNoteG = () => {
    this.playSound(noteG)
  }
  playNoteA = () => {
    this.playSound(noteA)
  }
  playNoteB = () => {
    this.playSound(noteB)
  }
  playNoteC = () => {
    this.playSound(noteC)
  }
  state = {
    //starting value/initial value for y 
    clicked: 0,
    yPosition: new Animated.Value(1),
    tableAsset: '3d_piano/O&C_COFFEE TABLE_1200x600x450.obj',
    tableTextureAsset:'3d_glass_piano/Null.1Surface_Color.jpg', 
    glassObj: '3d_glass_piano/szklanka+2.obj',
    glassTextureObj: '3d_glass_piano/glass-v2.jpg',
    userSequence:[0], 
    patternSequence:[],
    arrSounds: [this.playNoteMidC, this.playNoteD, this.playNoteE, this.playNoteF, this.playNoteG, this.playNoteA , this.playNoteB, this.playNoteC],
    glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
  };

  componentDidMount() {

  }

  

  render() {

    return ( <View >

      <VrButton>
      <AnimatedEntity

      source = {
        {
          obj: asset(this.state.tableAsset),
          // mtl: asset(this.state.tableTextureAsset)
        }
      }

      lit = {
        true
      }
      texture = {asset(this.state.tableTextureAsset)}
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

     { this.state.arrSounds.map((sound, index) =>
      <VrButton onClick={sound} key={index}>
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



      texture = {asset(this.state.glassesTexture[index])}
      style = {
        {
          transform: [{
              translate: [60+index*14, -130, 190]
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

      </VrButton>)}

    





      </View>
    )
  }
}


export default MagicPiano
