import "./App.css";
// import Counter from "./reducer/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
