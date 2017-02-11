import pjson from './../package.json';

export const SERVER_URL = 'http://localhost:8080/';
export const CLIENT_VERSION = pjson.version;
export const REACT_VERSION = pjson.dependencies.react;

export const WFS_URL = 'http://dev.o2.radiantbluecloud.com/o2-wfs/wfs';
export const THUMBNAIL_URL = 'http://dev.o2.radiantbluecloud.com/o2-wms/imageSpace/getThumbnail';
