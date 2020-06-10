import React, { Component } from "react";

export default class InputList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
    };
  }
  onChangeValue = (el) => {
    this.setState({
      newToDo: el.target.value,
    });
  };
  onAddToDo = () => {
    this.props.addToDo(this.state.newToDo);
  };
  render() {
    return (
      <div className="inputForm">
        <input
          className="input-group"
          name="to do"
          id="fname"
          type="text"
          placeholder="Please add to do"
          onChange={this.onChangeValue}
        ></input>
        <button onClick={this.onAddToDo}>Add</button>
      </div>
    );
  }
}
