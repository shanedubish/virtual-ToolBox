import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="toolForm">
        <h2>Add a Tool to your ToolBox</h2>
        <form className="addcar" onSubmit={this.props.createTool}>
          <input
            onKeyUp={this.props.makeNewTool}
            type="text"
            placeholder="Tool Name"
          />
          <br />

          <input
            onKeyUp={this.props.makeNewType}
            type="text"
            placeholder="Type"
          />
          <br />
          <input
            onKeyUp={this.props.makeNewMake}
            type="text"
            placeholder="Tool Make"
          />
          <br />
          <input
            onKeyUp={this.props.makeNewCost}
            type="text"
            placeholder="Cost "
          />
          <br />
          <input
            onKeyUp={this.props.makeNewLocation}
            type="text"
            placeholder="Location"
          />
          <br />
          <input
            onKeyUp={this.props.makeNewImage}
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
    );
  }
}
export default Add;
