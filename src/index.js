import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import React, { useEffect } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// const reducer = (state = 0, { type }) => {
//     switch (type) {
//         case 'increment':
//             return state + 1;
//         default:
//             return state;
//     }
// }
// const Counter = () => {

//     const count = useSelector(state => state)
//     const dispatch = useDispatch()

//     return (
//         <>
//           <button onClick={() => { dispatch({'type':'increment'})}}>+</button>
//             <span>{count}</span>
//           <button onClick={() => { dispatch({ 'type': 'decrement' }) }}>-</button>
//         </>
//     )
// }

// const store = createStore(reducer)

// export default () => {
//     return (
//         <Provider store={store} >
//             <Counter />
//         </Provider>
//     )
// }
// import { createStore } from "redux";

// //Action creator
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };
// let store = createStore(counter);
// // display it in console
// store.subscribe(() => console.log(store.getState()));

// //Dispatching Action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(increment());
