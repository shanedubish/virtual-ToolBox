import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">About</Link>
        <Link to="/main">Main</Link>
      </nav>
    );
  }
}

export default Nav;
