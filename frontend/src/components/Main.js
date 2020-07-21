import React from "react";
import axios from "axios";

class Main extends React.Component {
  state = {
    tools: [],
    editToggle: false,
  };
  componentDidMount() {
    this.props.getTools();
  }
  toggleEditForm = () => {
    this.setState({
      editToggle: !this.state.editToggle,
    });
  };

  // Update a Tool
  updateThisTool = (event) => {
    event.preventDefault();
    console.log(this.state.updateTool);

    const id = event.target.getAttribute("id");
    console.log(id);
    axios
      .put("http://127.0.0.1:8000/api/" + id, {
        name: this.state.updateTool,
        make: this.state.updateMake,
        cost: this.state.updateCost,
        location: this.state.updateLocation,
        type: this.state.updateType,
        image: this.state.updateImage,
      })
      .then(() => {
        this.props.getTools();
      });
    console.log("don't change me !!!");
  };

  updateTool = (event) => {
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].name });
    } else {
      this.setState({ updateTool: event.target.value });
    }
  };
  updateMake = (event) => {
    console.log(event.target.value);
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].make });
    } else {
      this.setState({ updateMake: event.target.value });
    }
  };

  updateCost = (event) => {
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].cost });
    } else {
      this.setState({ updateCost: event.target.value });
    }
  };

  updateLocation = (event) => {
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].location });
    } else {
      this.setState({ updateLocation: event.target.value });
    }
  };

  updateType = (event) => {
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].type });
    } else {
      this.setState({ updateType: event.target.value });
    }
  };

  updateImage = (event) => {
    const id = event.target.getAttribute("id");
    if (event.target.value === null) {
      this.setState({ updateTool: this.state[id].image });
    } else {
      this.setState({ updateImage: event.target.value });
    }
  };

  render() {
    return (
      <div className="main">
        <h3>Main Page</h3>

        <main>
          {this.props.tools.map((tool, i) => {
            return (
              <div className="oneTool">
                <img src={tool.image} alt="" />
                <h2>Name: {tool.name}</h2>
                <h2>Make: {tool.make}</h2>

                <h2>Location: {tool.location}</h2>
                <h2>Type: {tool.type}</h2>
                <h2>Cost: ${tool.cost}</h2>
                <button
                  value={this.props.tools.id}
                  className="btn-sm btn-primary m-2"
                  onClick={this.toggleEditForm}
                >
                  EDIT
                </button>
                {this.state.editToggle ? (
                  <div id={tool.id}>
                    <form onSubmit={this.updateThisTool} id={tool.id}>
                      <input
                        id={i}
                        onKeyUp={this.updateTool}
                        type="text"
                        placeholder="Tool Name"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.updateType}
                        type="text"
                        placeholder="Type"
                      />
                      <br />
                      <input
                        id={tool.id}
                        onKeyUp={this.updateMake}
                        type="text"
                        placeholder="Tool Make"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.updateCost}
                        type="text"
                        placeholder="Cost "
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.updateLocation}
                        type="text"
                        placeholder="Location"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.updateImage}
                        type="text"
                        placeholder="Image"
                      />
                      <br />
                      <button type="submit">Edit this Tool</button>
                    </form>
                  </div>
                ) : null}
                <button onClick={this.props.deleteTool} value={tool.id}>
                  DELETE
                </button>
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
