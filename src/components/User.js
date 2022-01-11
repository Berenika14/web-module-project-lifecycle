import React from "react";

class User extends React.Component {
  render() {
    return (
      <div id="UserCard">
        <img
          width="200px"
          src="https://avatars.githubusercontent.com/u/91492156?v=4"
        />
        <a href="https://github.com/Berenika14">
          <h3>Berenika Ahmetaj</h3>
        </a>
        <p>(Software Developer)</p>
        <p>Total Repos: 35 </p>
        <p>Total followers:16</p>
      </div>
    );
  }
}

export default User;
