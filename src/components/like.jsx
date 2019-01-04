import React, { Component } from "react";

class LikeButton extends Component {
  likeUnlikeStyle() {
    return !this.props.liked ? "fa fa-heart-o" : "fa fa-heart";
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
