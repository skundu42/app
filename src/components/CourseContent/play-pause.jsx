import React, { Component } from "react";
import { withMediaProps } from "react-media-player";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay);
library.add(faPause);

class PlayPause extends Component {
  constructor(props) {
    super(props);
    this._handlePlayPause = this._handlePlayPause.bind(this);
  }

  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause() {
    this.props.media.playPause();
  }

  render() {
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? (
          <FontAwesomeIcon icon="pause" />
        ) : (
          <FontAwesomeIcon icon="play" />
        )}
      </button>
    );
  }
}

export default withMediaProps(PlayPause);