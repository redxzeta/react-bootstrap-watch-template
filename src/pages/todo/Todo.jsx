import { useEffect, useReducer } from "react";
import { todoInitialState, todoReducer } from "../../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);
  useEffect(() => {
    dispatch({ type: "GET_TODOS" });
  }, []);
  console.log(state);
  return <div>{state.todos && <h1>WOW</h1>}</div>;
};
export default Todo;
