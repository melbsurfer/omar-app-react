import React, { Component } from 'react';

import ImageCard from './ImageCard';

class ImageList extends Component {

  render() {
    if(this.props){
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <ul className="list-unstyled">
              {this.props.data.map(function(image, index){
                return <li className="panel panel-default card" key={index}><ImageCard data={image} /></li>;
              })}
              {/* TODO: Convert the map above to es6 syntax and map over the images
              {this.props.data.map(image, index) =>
                return <li key={ index }>{image.properties.id}</li>;
              } */}
              </ul>
            </div>
          </div>
        </div>
      )}
     else {
      return <p>Loading content ...</p>
    }
  }
}

ImageList.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default ImageList;
