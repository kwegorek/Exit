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
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 0,
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
      { translate: [0, 0, -4] },
      { scaleX: 0.02 },
      { scaleY: 0.02 },
      { scaleZ: 0.02 },
    ],
  },
});
