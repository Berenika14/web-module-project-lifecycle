import React from "react";
import axios from "axios";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "Berenika14",
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((res) => {
        // console.log(res);
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      axios
        .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
        .then((res) => {
          // console.log(res);
          this.setState({
            ...this.state,
            followers: res.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
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
