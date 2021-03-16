import { call, takeEvery,put } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweets, setTweetsLoadingState, TweetsActionsType } from "./actionCreators";
import { LoadingState } from "./contracts/state";

export function* fetchTweetsRequest():any {

  try{
    const items = yield call(TweetsApi.fetchTweets);
    yield put (setTweets(items))
    console.log(items)
  }
  catch(error){
    yield put(setTweetsLoadingState(LoadingState.ERROR))

  }
 
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
