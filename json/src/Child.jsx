import React, { Component } from "react";

export default class Child extends Component {
  value = this.props.data;
  render() {
    return (
      <table border={2} cellSpacing={0}>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>IMAGE</th>
        </tr>
        {this.value.map((x) => {
          return (
            <tr>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>
                <img src={x.img} height={50} />
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}
