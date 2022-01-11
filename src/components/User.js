import React from "react";

class User extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id="UserCard">
        <img width="200px" src={this.props.user.avatar_url} />
        <a href={this.props.user.html_url}>
          <h3>{this.props.user.name}</h3>
        </a>
        <p>({this.props.user.login})</p>
        <p>Total Repos: {this.props.user.public_repos} </p>
        <p>Total followers:{this.props.user.followers}</p>
      </div>
    );
  }
}

export default User;
