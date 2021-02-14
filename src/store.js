import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import categoriesReducer from "./redux/categories/reducers/categoriesReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
