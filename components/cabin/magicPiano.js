/* eslint-disable complexity */
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
import { connect } from 'react-redux';
import {addCompletedTasks} from '../../store/tasksCompleted'

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


let noteMidC = '3d_glass_piano/do.wav'
let noteD = '3d_glass_piano/re.wav'
let noteE = '3d_glass_piano/mi.wav'
let noteF = '3d_glass_piano/fa.wav'
let noteG = '3d_glass_piano/si.wav' 
let noteA = '3d_glass_piano/la.wav'
let noteB= '3d_glass_piano/do2.wav'
let noteC = '3d_glass_piano/mi.wav'


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
    // patternSequence:[8,6,4,2,1,3,5,7],
    patternSequence:[0,1,2,3,4,5,6,7], // describes order in which glasses will change
    arrSounds: [this.playNoteMidC, this.playNoteD, this.playNoteE, this.playNoteF, this.playNoteG, this.playNoteA , this.playNoteB, this.playNoteC],
    glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
    currentlyDiplayedHint: '3d_hintboard/flippedHint.png', 
    userPattern: [], 
    gameStarted:false,
    gameFinished:false, 
    clickedBtn: 0, 
  };

  componentDidMount() {
    console.log('--->',this.props.musiscTask.musictable)

  }

  startGame = (_evt, index) => {

    console.log('index clicked', index)

    let indx = this.state.clickedBtn;


    if(this.state.gameStarted === true){

      if(this.state.clickedBtn === 0){

        if(index === this.state.patternSequence[indx]){
          console.log('this.state.patternSequence[indx]', this.state.patternSequence[indx])

          this.setState({
            clickedBtn: 1
          })
        }else {
          this.setState({
            gameStarted:false, 
            currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
            glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
            clickedBtn:0
          })
  
        }
      }else if(this.state.clickedBtn === 1){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 2
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 2){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 3
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 3){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 4
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 4){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 5
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              gameFinished:true, 
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 5){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 6
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              gameFinished:true, 
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 6){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 7
            })
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              gameFinished:true, 
              clickedBtn:0
            })
    
          }

        }else if(this.state.clickedBtn === 7){

          if(index === this.state.patternSequence[indx]){
  
            this.setState({
              clickedBtn: 8,
              currentlyDiplayedHint:'3d_hintboard/task_completed.png', 
            })

            this.props.addTaskCompleted(true)
          }else {
            this.setState({
              gameStarted:false, 
              currentlyDiplayedHint:'3d_hintboard/paper_try_again.png', 
              glassesTexture: Array(arrOfTextures.length).fill(glassTextureObjRegular),
              clickedBtn:0
            })
    
          }
        }
      }

        


  }


  tableClicked = () => {

    this.setState({
      gameStarted:true
    })

    //display task png -> podmienic na stanie 
    arrOfTextures.forEach((texture, index) => {
      setTimeout(function (that) {

        that.setState(prevState => {
          let newGlassesTexture = that.state.glassesTexture.slice() // copy array
          newGlassesTexture[index] = texture
          return {...prevState, glassesTexture : newGlassesTexture}
        
        })
        that.state.arrSounds[index]()
      }, 500*this.state.patternSequence[index], this);
    })

    this.setState({

      currentlyDiplayedHint: '3d_hintboard/flippedHint.png'
 
    })


  
  }

  

  render() {

    return ( <View >

      <VrButton onClick={this.tableClicked}>
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
      <VrButton onClick={sound, (evt) => this.startGame(evt, index)} key={index}>
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

      <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: 90,
          height: 60,
          transform: [

            {translateZ: 170},

            {translateX: 60}
          ],
          opacity: 1,
        }}
        source={ asset(this.state.currentlyDiplayedHint) }
      />
      </View>
    )
  }
}

mapStateToProps = (state) => {

  return {
    musiscTask: state.tasksCompleted
  }

}


mapDispatchToProps = (dispatch) => {

  return {

    addTaskCompleted: (val) => dispatch(addCompletedTasks(val))
    
  }

  
}


export default connect(mapStateToProps, mapDispatchToProps)(MagicPiano);
