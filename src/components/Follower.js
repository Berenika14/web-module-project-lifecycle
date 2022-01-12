import React from "react";

class Follower extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="follower">
        <img
          width="200px"
          style={{ borderRadius: "5px" }}
          src={this.props.follower.avatar_url}
        />
        <a href={this.props.follower.html_url}>
          <p>{this.props.follower.login}</p>
        </a>
      </div>
    );
  }
}
export default Follower;
