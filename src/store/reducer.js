import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import counterreducer from "./counterReducer";
import productReducer from "./product.reducer";
const reducer = combineReducers({todosReducer,counterreducer,productReducer})
export default reducer