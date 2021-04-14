import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { call, takeEvery, put } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { addTweet, setAddFormState, setTweets, setTweetsLoadingState } from "./actionCreators";
import { AddFormState, LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
    // console.log(items)
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({
  payload: text
}: FetchAddTweetActionInterface): any {
  try {
    
    const item = yield call(TweetsApi.addTweet, text);
    yield put(addTweet(item));
    // console.log(items)
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
 
}




export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
