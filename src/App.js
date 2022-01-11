import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input placeholder="Github handler" />
          <button>Search</button>
        </form>
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
        <div id="followers">
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/18543621?v=4"
            />
            <a href="https://github.com/JCSime">
              <p>JCSime</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/18543621?v=4"
            />
            <a href="https://github.com/JCSime">
              <p>JCSime</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/18543621?v=4"
            />
            <a href="https://github.com/JCSime">
              <p>JCSime</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
