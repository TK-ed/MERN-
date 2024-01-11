import { useReducer } from "react";

export default function Reducer() {
  const inititalState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        if ({count: state.count}<0){
          return 'error'
        }
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const increment = () => ({ type: "increment" });
  const decrement = () => ({ type: "decrement" });
  const [state, dispatch] = useReducer(reducer, inititalState);
  return (
    <>
      Count: {state.count} <br />
      <button onClick={() => dispatch(increment())}>+</button> <br />
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
