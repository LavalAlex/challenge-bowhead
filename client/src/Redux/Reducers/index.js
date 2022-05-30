import { combineReducers } from "redux";
import authReducer from "./Auth";
import pollReducer from "./Poll";

const reducers = combineReducers({
  auth: authReducer,
  poll: pollReducer,
});

export default reducers;
