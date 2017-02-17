import React, { Component } from 'react';
import 'whatwg-fetch';
import { WFS_URL } from './config';

class ImageListFilter extends Component {

  componentDidMount() {

    // Grab the image list from the server
    {/*fetch(WFS_URL +
      '/getFeature?' +
      'service=WFS' +
      '&version=1.0.0' +
      '&request=GetFeature ' +
      '&typeName=omar%3Araster_entry' +
      '&resultType=results' +
      '&outputFormat=JSON' +
      '&maxFeatures=100'+
      '&startIndex=0')
      .then(blob => blob.json())
      .then((data) => {
        let images = [];
        images = data.features.map(image => image);
        console.log('images', images);
        this.setState({images: images});
      });*/}

  }

  render() {
    return (
      <h1>Filter</h1>
    )
  }
}

export default ImageListFilter;
