import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import serviceListReducer from "../reducers/serviceList";
import serviceChooseReducer from "../reducers/serviceChoose";
import thunk from "redux-thunk";
import { fetchServicesEpic, serviceChooseEpic } from "../epics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceChoose: serviceChooseReducer,
});

const epic = combineEpics(fetchServicesEpic, serviceChooseEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
