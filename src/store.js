import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import categoriesReducer from "./redux/categories/reducers/categoriesReducer";
import userReducer from "./redux/user/userReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    user: userReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
