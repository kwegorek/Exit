import { StyleSheet } from 'react-360';

export default styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#ffff',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  rootButton: {
    margin: 30,
    padding: 20,
    width: 100,
    height: 70,
    borderWidth: 2,
    borderColor: '#ffff',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  root: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  skeleton: {
    transform: [
      { translate: [300, -550, -170] },
      { rotateY: -50 },
      { scaleX: 250.0 },
      { scaleY: 250.0 },
      { scaleZ: 250.0 },
    ],
  },
  hat: {
    transform: [
      { translate: [100, -230, 300] },
      { rotateY: 200 },
      { scaleX: 350.0 },
      { scaleY: 350.0 },
      { scaleZ: 350.0 },
    ],
  },
  startButton: {
    transform: [
      { translate: [-60, 0, 800] },
      { scaleX: 50.0 },
      { scaleY: 50.0 },
      { scaleZ: 50.0 },
    ],
  },
  tutorialTable: {
    transform: [
      { translate: [60, -10, 400] },
      { scaleX: 10.0 },
      { scaleY: 10.0 },
      { scaleZ: 10.0 },
    ],
  },
});
