import { Component } from "react";

class ButtonWithClass extends Component {
  constructor () {
    super();
    this.state = {
      greeting: "Hello",
      title: "Main Title"
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.greeting}</p>
        <button onClick={ () => this.setState({greeting: "Bye"}) }>Click Me</button>
        <button onClick={ () => this.setState({title: "Main Title 2"}) }>Click Me</button>
      </div>
    )
  }
}

export default ButtonWithClass;
