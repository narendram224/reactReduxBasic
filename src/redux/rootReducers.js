import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";
import userReducer from "./user/userReducer";

 const rootReducers = combineReducers({
    cake:cakeReducer,
    ice:iceCreamReducer,
    user:userReducer
});
export default rootReducers;