import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <main>
          <h2>Welcome to virtual-ToolBox</h2>
          <p>
            * Have you ever went to do a project in your home and could not a
            tool you needed? You know you have the tool you were looking for but
            it was MIA. Or maybe you forgot that you had a tool you need but
            bought another one just to find out later now you have two of those
            tools. This is the place for you!!
            <br />
            <br />
            * virtual-ToolBox allows you to add, update, and delete tools to
            your tool box.
            <br />
            <br />
            * Keep track of your tool's name, make, type, cost, location, and
            image.
            <br />
            <br />* Also a helpful feature makes it possible with just a click
            of the mouse to buy another tool on Amozon or Ebay if you tool is
            lost or broken.
          </p>
        </main>
      </div>
    );
  }
}

export default About;
