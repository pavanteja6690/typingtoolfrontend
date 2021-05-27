import { combineReducers } from "redux";
import { typingdetails } from "./typingdetails";
import { userdetails } from "./userdetails";
const rootreducer = combineReducers({ typingdetails, userdetails });
export default rootreducer;
