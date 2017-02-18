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
      <div className="well">
        <form className="form-horizontal">
          <fieldset>
            <legend>Filters</legend>
          </fieldset>
          <div className="form-group">
            <label htmlFor="filename" className="col-md-2 control-label">File name</label>
            <div className="col-md-8">
              <input type="text" className="form-control" id="filename" placeholder="File name"/>
            </div>
          </div>
        </form>
        <br/>
        <button className="btn btn-primary">Submit</button>
        &nbsp;
        <button className="btn btn-default">Reset</button>
      </div>
    )
  }
}

export default ImageListFilter;
