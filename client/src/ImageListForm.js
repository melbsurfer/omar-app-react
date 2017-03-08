import React, { Component } from 'react';
import 'whatwg-fetch';
import { WFS_URL } from './config';

import ImageList from './ImageList';

class ImageListForm extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      filename: '',
      id: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleFilterSubmit = (event) => {

    event.preventDefault();

    // let filename = this.filename.value;
    // let id = this.id.value;
    //
    // console.log('filename: ', this.filename.value);
    // console.log('id: ', this.id.value);
    //
    // this.setState(Object.assign(this.state, {
    //   filename,
    //   id
    // }));

    console.log('State in the handleFilterSubmit:', this.state);
    this.wfsRequest(this.state);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  wfsRequest(filterObj) {

    console.log('filterObj: ', filterObj);
    //filterObj = 'Public_img460.tif';
    let filter = '';

    if(filterObj) {
      filter = '&filter=' + encodeURIComponent(`filename like '%${filterObj.filename}%' `);
      console.log(`filter: ${filter}`);
    }

    // Grab the image list from the server

    // TODO: Refactor query items into a map or object
    fetch(WFS_URL +
      '/getFeature?' +
      'service=WFS' +
      '&version=1.0.0' +
      '&request=GetFeature ' +
      '&typeName=omar%3Araster_entry' +
      '&resultType=results' +
      '&outputFormat=JSON' +
      filter +
      '&maxFeatures=20' +
      '&startIndex=0')
      .then(blob => blob.json())
      .then((data) => {
        let images = [];
        images = data.features.map(image => image);
        //console.log('images', images);
        this.setState({images: images});
      });

  }

  componentWillMount() {
    this.wfsRequest();
  }

  render() {
    //console.log('State in the render:', this.state);
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
                    <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fileName">File name:</label>
                    <input type="text" className="form-control" name="filename" value={this.state.filename} onChange={this.handleInputChange} />
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
export default ImageListForm;
