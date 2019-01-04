import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    like: false
  };

  likeUnlikeStyle() {
    return !this.state.like ? "fa fa-heart-o" : "fa fa-heart";
  }

  likeUnlike() {
    let like = this.state.like;
    like = !like;
    this.setState({ like });
  }

  render() {
    return (
      <span>
        <i
          className={this.likeUnlikeStyle()}
          onClick={() => this.likeUnlike()}
        />
      </span>
    );
  }
}

export default LikeButton;
