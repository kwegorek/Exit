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
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  rootButton: {
    padding: 20,
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: 'green',
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
      { translate: [100, -400, 300] },
      { rotateY: 200 },
      { scaleX: 200.0 },
      { scaleY: 200.0 },
      { scaleZ: 200.0 },
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
      { translate: [0, 0, 50] },
      // { rotateY: 50 },
      // { rotateX: 80 },
      { scaleX: 10.0 },
      { scaleY: 10.0 },
      { scaleZ: 10.0 },
    ],
  },
});
