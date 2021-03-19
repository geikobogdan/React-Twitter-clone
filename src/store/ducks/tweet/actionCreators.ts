import { LoadingState, TweetState } from "./contracts/state";
import { FetchTweetDataActionInterface, SetTweetDataActionInterface, SetTweetLoadingStateActionInterface, TweetActionsType } from "./contracts/actionTypes";




export const setTweetData = (
  payload: TweetState["data"]
): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload:string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload
});

export type TweetActions =
  | SetTweetDataActionInterface
  | SetTweetLoadingStateActionInterface
  | FetchTweetDataActionInterface;
