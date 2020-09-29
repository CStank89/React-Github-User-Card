import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "CStank89",
      users: [],
      name: "",
    };
  }
  fetchUsers = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())

      .then((users) => {
        this.setState({
          users: users,
        });
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    this.fetchUsers(this.state.login);
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Cards</h1>
        {this.state.users.login}
        {this.state.users.name}
      </div>
    );
  }
}

export default App;
