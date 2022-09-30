import createStore from "redux-zero";
import { applyMiddleware } from "redux-zero/middleware";
import initialState from "./initialState";

let store;
let middlewares = [];
let reduxdevtools = undefined;

// devtools middleware for debuging
if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
  devTools.send("initialState", initialState);
  reduxdevtools = (store) => (next) => (action) => {
    const result = next(action);
    devTools.send(action.name, store.getState());
    return result;
  };
  devTools.subscribe((message) => {
    if (message.type === "DISPATCH" && message.payload.type === "JUMP_TO_ACTION") {
      store.setState(JSON.parse(message.state));
    }
  });
}

if (reduxdevtools) {
  middlewares = applyMiddleware(reduxdevtools);
}
store = createStore(initialState, middlewares);

export default store;
