import React from "react";
import axios from "axios";
class Main extends React.Component {
  state = {
    tools: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/", (err) => {
        console.log(err);
      })
      .then((response) => {
        this.setState({ tools: response.data });
        console.log(this.state.tools);
      });
  }

  createTool = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/create/", {
        name: this.state.newTool,
        make: this.state.newMake,
        cost: this.state.newCost,
        location: this.state.newLocation,
        type: this.state.newType,
        image: this.state.newImage,
      })
      .then((response) => {
        this.setState({ tools: response.data });
        console.log(this.state.tools);
        // window.location.reload(false);
      });
  };

  makeNewTool = (event) => {
    this.setState({ newTool: event.target.value });
  };
  makeNewMake = (event) => {
    this.setState({ newMake: event.target.value });
  };

  makeNewCost = (event) => {
    this.setState({ newCost: event.target.value });
  };

  makeNewLocation = (event) => {
    this.setState({ newLocation: event.target.value });
  };

  makeNewType = (event) => {
    this.setState({ newType: event.target.value });
  };

  makeNewImage = (event) => {
    this.setState({ newImage: event.target.value });
  };

  render() {
    return (
      <div className="main">
        <h3>Main Page</h3>

        <div className="t">
          <h2>Add a Tool to your ToolBox</h2>
          <form className="addcar" onSubmit={this.createTool}>
            <input
              onKeyUp={this.makeNewTool}
              type="text"
              placeholder="Tool Name"
            />
            <br />

            <input onKeyUp={this.makeNewType} type="text" placeholder="Type" />
            <br />
            <input
              onKeyUp={this.makeNewMake}
              type="text"
              placeholder="Tool Make"
            />
            <br />
            <input onKeyUp={this.makeNewCost} type="text" placeholder="Cost " />
            <br />
            <input
              onKeyUp={this.makeNewLocation}
              type="text"
              placeholder="Location"
            />
            <br />
            <input
              onKeyUp={this.makeNewImage}
              type="text"
              placeholder="Image"
            />
            <br />
            <input
              type="submit"
              value="Create New Car"
              className="btn-sm btn-primary"
            />
          </form>
        </div>

        <main>
          {this.state.tools.map((tool, i) => {
            return (
              <div className="oneTool">
                <img src={tool.image} alt="" />
                <h3>{tool.name}</h3>
                <h3>{tool.make}</h3>

                <h3>{tool.location}</h3>
                <h3>{tool.type}</h3>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Main;
