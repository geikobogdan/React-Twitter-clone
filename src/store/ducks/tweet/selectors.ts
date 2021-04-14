import { Tweet } from "../tweets/contracts/state";
import { RootState } from "./../../store";
import { LoadingState, TweetState } from "./contracts/state";


export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetData = (state: RootState):Tweet | undefined => selectTweet(state).data;
