import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ListItem(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState(props.i.id);
  const [email, setEmail] = useState(props.i.email);
  const [fname, setFname] = useState(props.i.first_name);
  const [lname, setLname] = useState(props.i.last_name);

  return (
    <tr key={props.key}>
      <td>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </td>
      <td>
        <img src={props.i.avatar} alt="" />
      </td>
      <td>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </td>

      <td>
        <button
          onClick={() => {
            console.log("Editing", props.i.id);
            let data = JSON.parse(localStorage.getItem("item"));
            const updatedList = {
              id: id,
              email: email,
              first_name: fname,
              last_name: lname,
            };
            console.log(updatedList);

            dispatch({ type: "EDIT", payload: updatedList });
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            console.log("Deleted", props.i.id);
            dispatch({ type: "DELETE", payload: props.i.id });
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
