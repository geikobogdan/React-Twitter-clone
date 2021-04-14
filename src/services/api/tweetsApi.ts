
import { axios } from "../../core/axios";
import { Tweet } from "../../store/ducks/tweets/contracts/state";


interface Responce<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(): Promise<Tweet[]> {
    const { data } = await axios.get<Responce<Tweet[]>>("/tweets");
    return data.data;
  },

  async fetchTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get<Responce<Tweet>>("/tweets/" + id);
    return data.data;
  },

  async addTweet(payload: string): Promise<Tweet> {
    const { data } = await axios.post<Responce<Tweet>>("/tweets", {text: payload});
    return data.data;
  },
};
