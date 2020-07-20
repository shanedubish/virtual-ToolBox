import React from "react";
import axios from "axios";

class Main extends React.Component {
  state = {
    tools: [],
  };
  componentDidMount() {
    this.getTools();
  }
  getTools = () => {
    axios
      .get("http://127.0.0.1:8000/api/", (err) => {
        console.log(err);
      })
      .then((response) => {
        this.setState({ tools: response.data });
        console.log(this.state.tools);
      });
  };

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

        <div className="toolForm">
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
              value="Create New Tool"
              className="btn-sm btn-primary"
            />
          </form>
        </div>

        <main>
          {this.state.tools.map((tool, i) => {
            return (
              <div className="oneTool">
                <img src={tool.image} alt="" />
                <h2>Name: {tool.name}</h2>
                <h2>Make: {tool.make}</h2>

                <h2>Location: {tool.location}</h2>
                <h2>Type: {tool.type}</h2>
                <h2>
                  <a
                    href={`https://www.amazon.com/s?k=${tool.name}&ref=nb_sb_noss_2`}
                    target="_blank"
                  >
                    Amazon
                  </a>
                </h2>
                <h2>
                  <a
                    href={`https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311.R1.TR11.TRC1.A0.H1.Xmider.TRS0&_nkw=${tool.name}&_sacat=0`}
                    target="_blank"
                  >
                    Ebay
                  </a>
                </h2>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Main;
