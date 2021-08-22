import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

const rootReducer = combineReducers({
    cities : citiesReducer,
    // itineraties : itinerariesReducer,
    // users : usersReducer
})

export default rootReducer