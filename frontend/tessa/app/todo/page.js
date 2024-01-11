"use client";
import react, { useReducer, useEffect } from "react";

const inititalState = { todo: ["add", "del"] };
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { state: state.todo.push("hello") };
    case "del":
      return { state: state.todo };
    default:
      throw new Error();
  }
};

const add = () => {
  return { type: "add" };
};
const del = () => {
  return { type: "del" };
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, inititalState);
  useEffect(() => {
    alert("useEffect");
  });
  return (
    <div>
      <input type="text" className="text-black" />
      <br />
      <button onClick={() => dispatch(add())}>Add</button> <br />
      <button onClick={() => dispatch(del())}>Delete</button>
      <br />
      <h2>Todo:{...state.todo}</h2>
    </div>
  );
}
