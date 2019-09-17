import React, { Component } from "react";

class LikeButton extends Component {
  likeUnlikeStyle() {
    return !this.props.liked ? "fa fa-heart-o clickable" : "fa fa-heart clickable";
  }

  render() {
    return (
      <span>
        <i className={this.likeUnlikeStyle()} onClick={this.props.onLike} />
      </span>
    );
  }
}

export default LikeButton;
