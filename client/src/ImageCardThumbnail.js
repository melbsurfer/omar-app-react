import React, { Component } from 'react';
import { THUMBNAIL_SERVICE } from './config';

class ImageCardThumbnail extends Component {

  constructor(props) {

    super(props);

    this.state = {
      thumbUrl: ''
    }

  }

  componentDidMount() {

    let url = THUMBNAIL_SERVICE.url +
      '?filename=' + this.props.filename +
      '&entry_id=' + this.props.entry_id +
      '&size=' + this.props.size +
      '&format=' + this.props.format
      
      this.setState({
        thumbUrl: url
      });

  }

  render() {
    return (
      <img className="media-object" src={this.state.thumbUrl} role="presentation"/>
    )
  }
}

ImageCardThumbnail.propTypes = {
  filename: React.PropTypes.string.isRequired,
  entry_id: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
  format: React.PropTypes.string.isRequired
}

export default ImageCardThumbnail;
