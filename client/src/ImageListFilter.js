import React, { Component } from 'react';
import 'whatwg-fetch';
import { WFS_URL } from './config';

import ImageList from './ImageList';

class ImageListFilter extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      filename: '',
      id: ''
    }

  }

  handleFilterSubmit = (event) => {

    event.preventDefault();

    let filename = this.filename.value;
    let id = this.id.value;

    console.log('filename: ', this.filename.value);
    console.log('id: ', this.id.value);

    this.setState(Object.assign(this.state, {
      filename,
      id
    }));

  }

  wfsRequest(filterItems) {

    console.log('filterItems: ', filterItems);
    //filterItems = 'Public_img460.tif';
    let filter = '';

    if(filterItems) {
      console.log('items ', filterItems.filename);
      filter = '&filter=' + encodeURIComponent(`filename like '%${filterItems.filename}%' `);
    }

    // Grab the image list from the server
    fetch(WFS_URL +
      '/getFeature?' +
      'service=WFS' +
      '&version=1.0.0' +
      '&request=GetFeature ' +
      '&typeName=omar%3Araster_entry' +
      '&resultType=results' +
      '&outputFormat=JSON' +
      filter +
      '&maxFeatures=200' +
      '&startIndex=0')
      .then(blob => blob.json())
      .then((data) => {
        let images = [];
        images = data.features.map(image => image);
        console.log('images', images);
        this.setState({images: images});
      });

  }

  componentDidMount() {
    this.wfsRequest();
  }

  render() {
    console.log('State in the render:', this.state);
    if (this.state.images){

      return (
        <div>
          <div className="well">
            <div className="row">
              <form className="form" onSubmit={this.handleFilterSubmit}>
                <fieldset>
                  <legend>Filters</legend>
                </fieldset>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="imageId">Image Id:</label>
                    <input type="text" className="form-control" ref={ (value) => this.id = value } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fileName">File name:</label>
                    <input type="text" className="form-control" ref={ (value) => this.filename = value } />
                  </div>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                &nbsp;
                <button className="btn btn-default">Reset</button>
              </form>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ImageList data={this.state.images}/>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default ImageListFilter;
