import {combineReducers, createStore, applyMiddleware } from "redux";
import {reducer as formReducer} from "redux-form"
import MathReducer from "./Store";
import thunk from "redux-thunk";
import MyDataReducer from "./MyDataReducer";

const Reducers = combineReducers({
    ProfileData: MyDataReducer,
    MathStore: MathReducer,
    form : formReducer
})
let store = createStore(Reducers , applyMiddleware(thunk
));
export default store