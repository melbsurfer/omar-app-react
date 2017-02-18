import React, { Component } from 'react';
import 'whatwg-fetch';
import { WFS_URL } from './config';

import ImageListFilter from './ImageListFilter';
import ImageCard from './ImageCard';

class ImageList extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    }
  }

  componentDidMount() {

    // Grab the image list from the server
    fetch(WFS_URL +
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
      });

  }

  render() {
    if(this.state.images){
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <ImageListFilter />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <ul className="list-unstyled">
              {/* TODO: Need to create an image component that will hold
              be the individual card */}
              {this.state.images.map(function(image, index){
                return <li className="panel panel-default card" key={ index }><ImageCard data={ image } /></li>;
              })}
              {/* TODO: Convert the map above to es6 syntax and map over the images
              {this.state.images.map(image, index) =>
                return <li key={ index }>{image.properties.id}</li>;
              } */}
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Loading content ...</p>
    }
  }
}

export default ImageList;
