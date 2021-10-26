import { combineReducers, createStore } from "redux";
import appReducer from "./app/appReducer";
import pricingReducer from "./pricing/pricingReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    pricing: pricingReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
