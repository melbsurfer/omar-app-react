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
      //value: ''
    }

    //this.handleWfsRequest = this.handleWfsRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({filename: event.target.value});

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

    console.log('state: ', this.state);

  }

  handleSubmit(event) {
    console.log(this.state);
    this.wfsRequest(this.state);
    event.preventDefault();
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

    if (this.state.images){

      return (
        <div>
          <div className="well">
            <div className="row">
              <form className="form" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Filters</legend>
                </fieldset>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="imageId">Image Id:</label>
                    <input type="text" className="form-control" name="id" value={this.state.imageId} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fileName">File name:</label>
                    <input type="text" className="form-control" name="filename" value={this.state.filename} onChange={this.handleChange}/>
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
