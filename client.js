// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';
import CamModule from './nativeMod'
import KeyboardCameraController from './camera.js';
import MouseLockCameraController from './camera.js';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new CamModule],
    ...options,
  });

  r360.renderToLocation(
    r360.createRoot('Exit', { /* initial props */ }),
    r360.getDefaultLocation()
  );
  
  r360.controls.addCameraController(new KeyboardCameraController());
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360mansion.jpg'));
}

window.React360 = {init};
