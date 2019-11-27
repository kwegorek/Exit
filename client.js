// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';
import { ReactInstance, Surface } from 'react-360-web';
import SurfaceModule from './surfaceModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new SurfaceModule()],
    ...options,
  });

  //intro surface
  let TutorialSurface = new Surface(1000, 1000, Surface.SurfaceShape.Flat);
  TutorialSurface.setAngle(0, 0);
  r360.renderToSurface(r360.createRoot('TutorialSurface', {}), TutorialSurface);

  //cabin story surface 

  //escaped (won game) surface

  //lost game surface

  //make surfaces global
  window.reactIns = r360;
  window.TutorialSurface = TutorialSurface;

  //room location
  r360.renderToLocation(r360.createRoot('Exit', {}), r360.getDefaultLocation());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };





