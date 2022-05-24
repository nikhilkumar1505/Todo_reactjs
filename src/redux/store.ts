import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
  Store,
  AnyAction,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import randomUserReducer from "./reducer/randomuser";

const middlewares = [thunk];

const composeEnhancers = compose;

const rootReducer = combineReducers({ randomUserReducer });

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  any,
  AnyAction
>;
export default store;
