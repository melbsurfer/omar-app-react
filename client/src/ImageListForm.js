import React, { Component } from 'react';
import 'whatwg-fetch';
//import { WFS_URL } from './config';

import ImageList from './ImageList';

//import WfsRequest from './libs/Wfs'
import Wfs from './libs/Wfs'

class ImageListForm extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      totalFeatures: 'Calculating...',
      requestFailed: false,
      filename: '',
      id: '',
      target: '',
      wac: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleFilterSubmit = (event) => {

    event.preventDefault();
    //console.log('State in the handleFilterSubmit:', this.state);
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

    const wfs = new Wfs();

    wfs.getResultsData('aCoolObj').then(function(data) {

      console.log('wfs.getResultsData: ', data);
      this.setState({images: data});

    }.bind(this));
















    //WfsRequest(null);
    //console.log('filterObj: ', filterObj);

    //filterObj = 'Public_img460.tif';
    // let filterArray = [];
    // let filterClause = '';
    // let filter = '';

    // if(filterObj) {
    //   // filter = encodeURIComponent(`filename like '%${filterObj.filename}%' `);
    //   // console.log(`filter: ${filter}`);
    //
    //   // TODO Maybe? Wrap this in a function that takes in the filterobj[key], and then
    //   // uses the logic to add the item to the filter array?
    //
    //   // In Progress: Write an if...then that checks for the item values on the form.  If
    //   // their value is populated we need to add it to the clause array.  If not
    //   // disregard it...
    //   if(filterObj.filename !== '') {
    //     //clause = [dbName + " LIKE '%", formField.trim().toUpperCase(), "%'"].join("");
    //     filterClause = [`filename LIKE '%${filterObj.filename}%'`].join(``);
    //     //console.log(`filterObj.filename is: ${filterObj.filename}`);
    //     //console.log('filterClauseArray: ', filterClauseArray);
    //
    //     filterArray.push(filterClause);
    //     console.log('filterArray: ', filterArray);
    //
    //     filter = encodeURIComponent(filterArray.join(" AND "));
    //     console.log('filter: ', filter);
    //
    //   }
    //   else if(filterObj.id !== '') {
    //
    //     filterClause = [`id LIKE '%${filterObj.id}%'`].join(``);
    //     filterArray.push(filterClause);
    //
    //     console.log('filterArray: ', filterArray);
    //
    //     filter = encodeURIComponent(filterArray.join(" AND "));
    //     console.log('filter: ', filter);
    //
    //   }
    //
    //   // for (var prop in filterObj) {
    //   //   //console.log('filterObj.' + prop, '=', filterObj[prop]);
    //   //
    //   //   if (filterObj[prop] === '' || filterObj[prop] === 'images') {
    //   //     console.log(`${prop} is empty!`);
    //   //   }
    //   //   else {
    //   //     //console.log('filterObj.' + prop, '=', filterObj[prop]);
    //   //     console.log(`${prop} LIKE '%${filterObj[prop]}%'`)
    //   //   }
    //   // }
    // }
    //
    // // TODO:  Add ability to catch errors, and present
    // // it to the user: https://www.youtube.com/watch?v=MjavMX8fUAE&feature=youtu.be
    // fetch(WFS_URL+
    //   '/getFeature?' +
    //   'service=WFS' +
    //   '&request=GetFeature ' +
    //   '&typeName=omar%3Araster_entry' +
    //   '&outputFormat=JSON' +
    //   '&filter=' + encodeURIComponent(filter) +
    //   '&resultType=hits')
    //   .then(response => {
    //     console.log('response: ', response);
    //     if(!response) {
    //       alert('A network error has occurred!');
    //     }
    //     if(!response.ok){
    //       throw Error('Network error has occurred!');
    //     }
    //     return response;
    //   })
    //   .then(data => data.json())
    //   .then((data) => {
    //     //console.log('data: ', data);
    //     this.setState({totalFeatures: data.totalFeatures})
    //   })

    // setTimeout(()=> {
    //   // TODO:  Add ability to catch errors, and present
    //   // it to the user: https://www.youtube.com/watch?v=MjavMX8fUAE&feature=youtu.be
    //   fetch(WFS_URL +
    //     '/getFeature?' +
    //     'service=WFS' +
    //     '&version=1.0.0' +
    //     '&request=GetFeature ' +
    //     '&typeName=omar%3Araster_entry' +
    //     '&resultType=results' +
    //     '&outputFormat=JSON' +
    //     '&filter=' + encodeURIComponent(filter) +
    //     '&maxFeatures=20' +
    //     '&startIndex=0')
    //     .then(response => {
    //       if(!response.ok){
    //         throw Error('Network error has occurred!');
    //       }
    //       return response;
    //     })
    //     .then(data => data.json())
    //     .then((data) => {
    //       let images = [];
    //       images = data.features.map(image => image);
    //       //console.log('images', images);
    //       this.setState({images: images});
    //     });
    // }, 5000);

  }

  componentDidMount() {
    this.wfsRequest();
  }

  render() {
    //console.log('State in the render:', this.state);
    if (this.state.images.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <br/>
              <br/>
              <p className="text-center">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                &nbsp;&nbsp;&nbsp;Loading images, please wait...
                <span className="sr-only">Loading...</span>
              </p>
            </div>
          </div>
        </div>)
    }
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="well">
                <p className="pull-right">Total Features: {this.state.totalFeatures}</p>
                <div className="row">
                  <form className="form" onSubmit={this.handleFilterSubmit}>
                    <fieldset>
                      <legend><span className="glyphicon glyphicon-filter" aria-hidden="true"></span>&nbsp;Keyword Filters</legend>
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="target">Target Id:</label>
                        <input type="text" className="form-control" name="target" value={this.state.target} onChange={this.handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="target">World Area Code:</label>
                        <input type="text" className="form-control" name="wac" value={this.state.wac} onChange={this.handleInputChange} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                        &nbsp;
                        <button className="btn btn-default">Reset</button>
                      </div>
                    </div>
                  </form>
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <ImageList data={this.state.images}/>
            </div>
          </div>
        </div>
      )
  }
}
export default ImageListForm;