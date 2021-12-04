import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import * as ReactBootStrap from "react-bootstrap";
function List() {
  const list = useSelector((state) => state.tReducer.data);
  //   console.log(list);
  return (
    <ReactBootStrap.Table striped bordered hover>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>email address</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Edit Button</th>
        <th>Delete Button</th>
      </tr>
      {list.map((i) => (
        <ListItem key={i.id} i={i} />
      ))}
    </ReactBootStrap.Table>
  );
}

export default List;
