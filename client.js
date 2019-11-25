// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';
import { ReactInstance } from 'react-360-web';
// import keyboardCamController from './keyBoardController'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  r360.renderToLocation(
    r360.createRoot('Exit', {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );

  // r360.controls.addCameraController(new keyboardCamController());
  // r360.controls.addCameraController(new MouseLockCameraController(r360._eventLayer))

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360mansion.jpg'));
  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };
