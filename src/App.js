import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import List from "./component/List";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  fetch("https://reqres.in/api/users?page=1")
    .then((res) => res.json())
    .then((r) => {
      console.log(r.data);

      localStorage.setItem("item", JSON.stringify(r.data));
      dispatch({ type: "LOAD", payload: r.data });
    });

  return (
    <div className="app">
      <List />
    </div>
  );
}

export default App;
