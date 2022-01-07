import { Component } from "react";

class ButtonWithClass extends Component {
  constructor () {
    super();
    this.state = {
      caption: "Hello"
    }
  }
  render () {
    return (
      <div>
        <p>{this.state.caption}</p>
        <button onClick={ () => this.setState({caption: "Bye"}) }>Click Me</button>
      </div>
    )
  }
}

export default ButtonWithClass;
