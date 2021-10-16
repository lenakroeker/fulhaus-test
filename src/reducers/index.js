import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartState: cartReducer,
});

export default allReducers;
