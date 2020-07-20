import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <Link to="/">
            <h2>virtual-ToolBox</h2>
          </Link>
          <Link to="/main">
            <h2>Main</h2>
          </Link>
          <Link to="/add">
            <h2>Add</h2>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
