import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "Berenika14",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/91492156?v=4",
      html_url: "https://github.com/Berenika14",
      name: "Berenika",
      login: "Berenika14",
      public_repos: 35,
      followers: 16,
    },
    followers: [
      {
        login: "JSCime",
        avatar_url: "https://avatars.githubusercontent.com/u/18543621?v=4",
        html_url: "https://github.com/JCSime",
      },
      {
        login: "JSCime",
        avatar_url: "https://avatars.githubusercontent.com/u/18543621?v=4",
        html_url: "https://github.com/JCSime",
      },
      {
        login: "JCSime",
        avatar_url: "https://avatars.githubusercontent.com/u/18543621?v=4",
        html_url: "https://github.com/JCSime",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input placeholder="Github handler" />
          <button>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
