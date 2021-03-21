import { LoadingState, Tweet, TweetsState } from "./contracts/state";
import { Action } from "redux";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE ",
  FETCH_ADD_TWEET= "tweets/FETCH_ADD_TWEET",
  ADD_TWEET= "tweets/ADD_TWEET",
}
export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}


export interface SetTweetsLoadingActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});


export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});


export const addTweet = (
  payload: Tweet
): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingActionInterface
  | FetchTweetsActionInterface;
