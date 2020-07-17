import React from "react";
import axios from "axios";
class Main extends React.Component {
  state = {
    tools: [],
  };
  componentDidMount() {
    axios
      .get("https://virtual-tool-box.herokuapp.com/api", (err) => {
        console.log(err);
      })
      .then((response) => {
        this.setState({ tools: response.data });
        console.log(this.state.tools);
      });
  }
  render() {
    return (
      <div className="main">
        <h3>Main Page</h3>
        <main>
          <p>{this.state.tools}</p>
        </main>
      </div>
    );
  }
}

export default Main;
