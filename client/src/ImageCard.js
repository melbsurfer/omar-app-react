import React, { Component } from 'react';

class ImageCard extends Component {

  render() {
    const divStyle = {
      color: '#ccc',
    }
    return (
      <div style={divStyle}>
        <div>
          <img src={"http://placehold.it/100x100"}/>
        </div>
        <ul>
          <li><strong>ID: </strong>{this.props.data.properties.id}</li>
          <li><strong>Acq. Date: </strong>{this.props.data.properties.acquisition_date}</li>
          <li><strong>Sensor: </strong>{this.props.data.properties.sensor_id}</li>
          <li><strong>Mission: </strong>{this.props.data.properties.mission_id}</li>
        </ul>
      </div>
    )
  }
}

export default ImageCard;
