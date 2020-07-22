import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About.js";
import Main from "./components/Main.js";
import Add from "./components/Add.js";
import Navigation from "./components/Nav.js";
import axios from "axios";

class App extends React.Component {
  state = { tools: [] };

  //Get Tools
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

  //Create a Tool

  createTool = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/create/", {
        id: "",
        name: this.state.newTool,
        make: this.state.newMake,
        cost: this.state.newCost,
        location: this.state.newLocation,
        type: this.state.newType,
        image: this.state.newImage,
      })
      .then((response) => {
        this.setState({ tools: [response.data, ...this.state.tools] });
        this.getTools();

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

  //  delete this Tool
  deleteTool = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    axios
      .delete("http://127.0.0.1:8000/api/" + event.target.value)
      .then((response) => {
        this.setState({ tools: response.data });
        this.getTools();
      });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <Route path="/" exact component={About} />
            <Route
              path="/main"
              render={() => (
                <Main
                  getTools={this.getTools}
                  tools={this.state.tools}
                  deleteTool={this.deleteTool}
                  upadateTool={this.upadateTool}
                  upadateMake={this.upadateMake}
                  upadateCost={this.upadateCost}
                  upadateLocation={this.upadateLocation}
                  upadateType={this.upadateType}
                  upadateImage={this.upadateImage}
                />
              )}
            />
            <Route
              path="/add"
              render={() => (
                <Add
                  createTool={this.createTool}
                  makeNewTool={this.makeNewTool}
                  makeNewMake={this.makeNewMake}
                  makeNewCost={this.makeNewCost}
                  makeNewLocation={this.makeNewLocation}
                  makeNewType={this.makeNewType}
                  makeNewImage={this.makeNewImage}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
