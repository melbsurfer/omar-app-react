import React, { Component } from 'react';

import { Map } from 'ol'
// import View from 'ol/view';
// import TileLayer from 'ol/layer/tile';
// import XYZ from 'ol/source/xyz';

class OlMap extends Component {

  componentDidMount() {
/*
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
*/
  }
  render() {
    return(
      <div id='map'>OL Map Goes Here</div>
    );
  }
}

export default OlMap;
