import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store=createStore(rootReducer,applyMiddleware(thunk))
export default store;
export type AppDispatch = typeof store.dispatch


