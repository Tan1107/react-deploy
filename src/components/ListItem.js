import React, { Component } from "react";
import { Checkbox } from "antd";
import "./styles.css";

export default class ListItem extends Component {
  render() {
    const { item } = this.props;
    const isDoneClass = item.isDone ? "isDone" : "";
    return (
      <div className={`list-item ${isDoneClass}`}>
        <Checkbox onClick={this.props.onItemClick}>{item.name}</Checkbox>
      </div>
    );
  }
}
