import { Module } from 'react-360-web';

export default class SurfaceModule extends Module {
  constructor() {
    super('SurfaceModule');
    this.canClick = false;
  }
  zoomCamera(newLocation) {
    console.log('....zooming camera');
    const r360 = window.reactIns;
    let cameraPosition = r360.getCameraPosition();
    cameraPosition[0] = newLocation[0];
    cameraPosition[1] = newLocation[1];
    cameraPosition[2] = newLocation[2];
  }
  //attempting to disable button if camera is too far
  disableButton(objDistance) {
    //if z index of camera is close to obj --> can click
    // const zIndex = cameraPosition[2]
    // console.log("Camera2", zIndex)
    // // //if zVertex is within objDistance +/- 100, canClick = true
    // if (zIndex <= objDistance + 100 && zIndex >= objDistance - 100) {
    //   this.canClick = true
    // }
  }
  renderNavBar() {
    const document = window.document.getElementById('navBar');
    console.log('In render', document);
  }
  changeSurfaceAngle(surfaceName, horizontalAngle, verticleAngle) {
    window[surfaceName].setAngle(horizontalAngle, verticleAngle);
  }
  changeSurfaceSize(surfaceName, scaleX, scaleY) {
    window[surfaceName].resize(scaleX, scaleY);
  }
}
