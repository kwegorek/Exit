// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';
import { ReactInstance, Surface } from 'react-360-web';
// import keyboardCamController from './keyBoardController'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  //intro surface
  //exit surface
  //navBar surface
  const navBarSurface = new Surface(1000, 100, Surface.SurfaceShape.Flat);
  navBarSurface.setAngle(0, 0);
  r360.renderToSurface(r360.createRoot('NavBar', {}), navBarSurface);

  //room location
  r360.renderToLocation(
    r360.createRoot('Exit', {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );



  const centralIntro = new Surface(300,600, Surface.SurfaceShape.Flat);
  ///delte later
  centralIntro.setAngle(0.0, 0);

  r360.renderToSurface(
    r360.createRoot('Intro'),
    centralIntro,
  );


  // r360.controls.addCameraController(new keyboardCamController());
  // r360.controls.addCameraController(new MouseLockCameraController(r360._eventLayer))

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360mansion.jpg'));
  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };
