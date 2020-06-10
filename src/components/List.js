import React, { Component } from "react";
import ListItem from "./ListItem";
import "./styles.css";

export default class List extends Component {
  render() {
    return (
      <div className ="list">
        {this.props.list.map((el, index) => {
          return (
            <ListItem
              key={index}
              item={el}
              onItemClick={() => this.props.clickItem(el.id)}
            />
          );
        })}
      </div>
    );
  }
}
