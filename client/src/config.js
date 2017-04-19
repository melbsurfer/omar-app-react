import pjson from './../package.json';

export const SERVER_URL = 'http://localhost:8080/';
export const CLIENT_VERSION = pjson.version;
export const REACT_VERSION = pjson.dependencies.react;

export const WFS_URL = 'https://omar-dev.ossim.io/omar-wfs/wfs';

export const THUMBNAIL_SERVICE = {
  url: 'https://omar-dev.ossim.io/omar-wms/imageSpace/getThumbnail',
  size: 140,
  format: 'jpeg'
}
