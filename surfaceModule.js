import { Module } from 'react-360-web';

export default class SurfaceModule extends Module {
  constructor() {
    super('SurfaceModule');
  }
  changeSurfaceAngle(surfaceName, horizontalAngle, verticleAngle) {
    window[surfaceName].setAngle(horizontalAngle, verticleAngle);
  }
  changeSurfaceSize(surfaceName, scaleX, scaleY) {
    window[surfaceName].resize(scaleX, scaleY);
  }
  //detachSurface doesn't work... not sure why?
  detachSurface(surfaceName) {
    const tag = window[surfaceName];
    window.reactIns.detachRoot(tag);
  }
}
