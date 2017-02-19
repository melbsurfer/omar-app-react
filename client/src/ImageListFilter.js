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

  onExecuteWfsRequest(items) {

    items = 'Public_img460.tif';
    let filter = '';
    if(!items === undefined) {
      filter = '&filter=' + encodeURIComponent(`filename like '%${items}%' `);
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
      //"&filter=" + encodeURIComponent("filename like '%Public_img46.tif%' ") +
      //"&filter=" + encodeURIComponent(`filename like '%${item}%' `)  +
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
    this.onExecuteWfsRequest();
  }

  render() {

    if (this.state.images){

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
              <button onClick={()=> this.onExecuteWfsRequest()} className="btn btn-primary">Submit</button>
              &nbsp;
              <button className="btn btn-default">Reset</button>
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
