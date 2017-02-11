import React, { Component } from 'react';
import { THUMBNAIL_URL } from './config';

class ImageCardThumbnail extends Component {

  constructor(props) {

    super(props);

    this.state = {
      thumbUrl: ''
    }

  }

  componentDidMount() {

    let url = THUMBNAIL_URL +
      '?filename=' + this.props.filename +
      '&entry_id=' + this.props.entry +
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
