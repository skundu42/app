import React, { Component } from "react";
import { withMediaProps } from "react-media-player";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

library.add(faExpand);

class Fullscreen extends Component {
  constructor(props) {
    super(props);
    this._handleFullscreen = this._handleFullscreen.bind(this);
  }

  shouldComponentUpdate({ media }) {
    return this.props.media.isFullscreen !== media.isFullscreen;
  }

  _handleFullscreen() {
    this.props.media.fullscreen();
  }

  render() {
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleFullscreen}
      >
        {media.isFullscreen ? (
          "Exit Fullscreen"
        ) : (
          <FontAwesomeIcon icon="expand" />
        )}
      </button>
    );
  }
}

export default withMediaProps(Fullscreen);