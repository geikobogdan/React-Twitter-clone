import { TweetsState } from './ducks/tweets/contracts/state';
//@ts-ignore

import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { TagsState } from './ducks/tags/contracts/state';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet :  TweetsState;
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
