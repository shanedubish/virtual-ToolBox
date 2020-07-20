import React from "react";

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
                    <form onSubmit={this.props.updateThisTool} id={tool.id}>
                      <input
                        id={i}
                        onKeyUp={this.props.updateTool}
                        type="text"
                        placeholder="Tool Name"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.props.updateType}
                        type="text"
                        placeholder="Type"
                      />
                      <br />
                      <input
                        id={tool.id}
                        onKeyUp={this.props.updateMake}
                        type="text"
                        placeholder="Tool Make"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.props.updateCost}
                        type="text"
                        placeholder="Cost "
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.props.updateLocation}
                        type="text"
                        placeholder="Location"
                      />
                      <br />
                      <input
                        id={i}
                        onKeyUp={this.props.updateImage}
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
