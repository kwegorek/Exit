import { Module } from 'react-360-web';

export default class SurfaceModule extends Module {
  constructor() {
    super('SurfaceModule');
    this.canClick = false;
  }
  zoomCamera(objLocation) {
    console.log('....zooming camera');
    const r360 = window.reactIns;
    let cameraPosition = r360.getCameraPosition();
    cameraPosition[0] = objLocation[0] 
    cameraPosition[1] = objLocation[1]
    cameraPosition[2] = objLocation[2]
  }
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
