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

  //intro surfaces
  let TutorialOne = new Surface(1000, 1000, Surface.SurfaceShape.Flat);
  TutorialOne.setAngle(0, 0);
  r360.renderToSurface(r360.createRoot('TutorialOne', {}), TutorialOne);

  let TutorialTwo = new Surface(2000, 1000, Surface.SurfaceShape.Flat);
  TutorialTwo.setAngle(-Math.PI / 2, 0);
  r360.renderToSurface(r360.createRoot('TutorialTwo', {}), TutorialTwo);

  //navBar surface
  let NavBar = new Surface(1, 1, Surface.SurfaceShape.Flat);
  NavBar.setAngle(0, 0);
  r360.renderToSurface(r360.createRoot('NavBar', {}), NavBar);
  // const cameraQuat = r360.getCameraQuaternion();
  // NavBar.recenter(cameraQuat, 'yaw');

  //make surfaces global
  window.reactIns = r360;
  window.NavBar = NavBar;
  window.TutorialOne = TutorialOne;
  window.TutorialTwo = TutorialTwo;
 
  //room location
  r360.renderToLocation(r360.createRoot('Exit', {}), r360.getDefaultLocation());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };
