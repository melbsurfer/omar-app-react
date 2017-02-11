import React, { Component } from 'react';

import { THUMBNAIL_SERVICE } from './config';
import ImageCardThumbnail from './ImageCardThumbnail';

class ImageCard extends Component {

  render() {

    return (
      <div className="media ">
        <div className="media-left">
          {/*<img className="media-object" src={"http://placehold.it/120x120"}/>*/}
          <ImageCardThumbnail
            filename={this.props.data.properties.filename}
            entry_id={this.props.data.properties.entry_id}
            size={THUMBNAIL_SERVICE.size}
            format={THUMBNAIL_SERVICE.format}
          />
        </div>
        <div className="media-body media-middle">
          <h3 className="media-heading">Image {this.props.data.properties.id}</h3>
          <ul>
            <li><strong>Name: </strong> {this.props.data.properties.title}</li>
            <li><strong>Acquired: </strong> {this.props.data.properties.acquisition_date}</li>
            <li><strong>Sensor: </strong> {this.props.data.properties.sensor_id}</li>
            <li><strong>Mission: </strong> {this.props.data.properties.mission_id}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ImageCard;
