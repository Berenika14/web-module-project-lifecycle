import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
        id="followers"
      >
        {this.props.followers.map((follower, id) => {
          return <Follower key={id} follower={follower} />;
        })}
      </div>
    );
  }
}

export default FollowerList;
