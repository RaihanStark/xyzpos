import { combineReducers, createStore, applyMiddleware } from "redux";
import appReducer from "./app/appReducer";
import pricingReducer from "./pricing/pricingReducer";
import formsReducer from "./forms/formsReducer";
import accountReducer from "./account/accountReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

const store = createStore(
  combineReducers({
    app: appReducer,
    pricing: pricingReducer,
    forms: formsReducer,
    account: accountReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
