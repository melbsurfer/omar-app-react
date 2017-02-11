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

      console.log('url: ', url);
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

export default ImageCardThumbnail;
