import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';
import { call, takeEvery,put } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsApi";

import { LoadingState } from "./contracts/state";

export function* fetchTagsRequest():any {

  try{
    const items = yield call(TagsApi.fetchTags);
    yield put (setTags(items))
   // console.log(items)
  }
  catch(error){
    yield put(setTagsLoadingState(LoadingState.ERROR))

  }
 
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
