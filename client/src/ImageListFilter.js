import React, { Component } from 'react';
import 'whatwg-fetch';
import { WFS_URL } from './config';

import ImageList from './ImageList';

class ImageListFilter extends Component {
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

    if (this.state.images){
      console.log('render images: ', this.state.images)
      return (
        <div>
          <div className="well">
            <div className="row">
              <form className="form">
                <fieldset>
                  <legend>Filters</legend>
                </fieldset>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="imageId">Image Id:</label>
                    <input type="text" className="form-control" id="ImageId"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fileName">File name:</label>
                    <input type="text" className="form-control" id="fileName"/>
                  </div>
                </div>
              </form>
              <br/>
            </div>
            <div className="row">
              <button className="btn btn-primary">Submit</button>
              &nbsp;
              <button className="btn btn-default">Reset</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Image List</p>
              <ImageList data={this.state.images}/>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default ImageListFilter;
