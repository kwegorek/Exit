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
  mario: {
    transform: [
      { translate: [100, 0, -100] },
      { scaleX: 1.00 },
      { scaleY: 1.00 },
      { scaleZ: 1.00 },
    ],
  },
  mario2: {
    transform: [
      { translate: [200, 0, -100] },
      { scaleX: 1.00 },
      { scaleY: 1.00 },
      { scaleZ: 1.00 },
    ],
  },
  startButton: {
    transform: [
      { translate: [0, 0, 600] },
      {rotateY: 200},
      { scaleX: 1.00 },
      { scaleY: 1.00 },
      { scaleZ: 1.00 },
    ],
  }
});
