import React from "react";

class ClStateComp extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "BMW",
      model: "X5",
      color: "Metallic Grey",
    };
  }
  render() {
    return (
      <div>
        <h1>
          My {this.state.brand} {this.state.model}
        </h1>
        <p>is {this.state.color} in color</p>
      </div>
    );
  }
}

export default ClStateComp;
