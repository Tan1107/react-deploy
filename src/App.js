import React, { Component } from "react";
import "./components/styles.css"
import InputList from "./components/InputList";
import List from "./components/List";

const toDoList = [
  { id: 0, name: "Dọn Nhà", isDone: false },
  { id: 1, name: "Nấu ăn", isDone: false },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: toDoList,
    };
  }

  componentDidMount() {
    console.log("did mount");
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  clickItem = (id) => {
    const list = [...this.state.toDoList];
    const index = list.findIndex((el) => el.id === id);
    if (index !== -1) {
      list[index].isDone = !list[index].isDone;
      this.setState({
        toDoList: list,
      });
    }
  };

  addToDo = (toDo) => {
    const newToDo = {
      name: toDo,
      id: this.state.toDoList.length,
      isDone: false,
    };
    const newList = [...this.state.toDoList, newToDo];
    this.setState({
      toDoList: newList,
    });
  };

  render() {
    return (
      <div className="toDoApp">
        <p>TODO APP</p>
        <InputList addToDo={this.addToDo} />
        <List
          name="To Do"
          list={this.state.toDoList}
          clickItem={this.clickItem}
        />
        <div className="footer">
          Done {this.state.toDoList.filter((el) => el.isDone === true).length}/
          {this.state.toDoList.length}
        </div>
      </div>
    );
  }
}
