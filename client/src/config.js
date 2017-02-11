import pjson from './../package.json';

export const SERVER_URL = 'http://localhost:8080/';
export const CLIENT_VERSION = pjson.version;
export const REACT_VERSION = pjson.dependencies.react;

export const WFS_URL = 'http://dev.o2.radiantbluecloud.com/o2-wfs/wfs'
//fetch('http://omar.ossim.org/omar/wfs?service=WFS&version=1.0.0&request=getFeature&typeName=omar%3Araster_entry&outputFormat=JSON&maxFeatures=200&offset=0&resultType=json&sortBy=id%2BA&cache=false&_=1486604378053')
